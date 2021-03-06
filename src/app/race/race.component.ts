import { Component, Inject, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Boat, BoatClass, BoatService } from '../services/boat.service';
import { SettingsService } from '../services/settings.service';
import { YardstickService } from '../services/yardstick.service';
import { TimerPipe } from '../timer.pipe';
import { ScoringPipe, Scorings } from '../enums/scorings';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
  providers: [ TimerPipe ]
})
export class RaceComponent {

  scoringEnumList = [];

  SIGNALS = {
    300: { //5 Minutes
      horn: '.',
      flags: {
        class: true
      }
    },
    240: { //4 Minutes
      horn: '.',
      flags: {
        preparatory: true
      }
    },
    60: { //1 Minute
      horn: '-',
      flags: {
        preparatory: false
      }
    },
    0: { //START
      horn: '.',
      flags: {
        class: false
      }
    }
  }
  
  showFlags = false;
  flags = {
    preparatory: false,
    class: false,
    p: true,
    i: false,
    z: false,
    u: true,
    black: false,
    x: false
  }

  raceState: number = 0; //0=Not started, 1=Countdown, 2=Started, 3=Finished
  now: number = 0; //Seconds since start, negative if on countdown 
  countdown: number = 300;
  preparationSignal: number = 0;

  boats: Boat[] = [];

  newBoatName: string = '';
  newBoatSkipper: string = '';
  newBoatCrew: string[] = [];
  newBoatClass: BoatClass = undefined;
  boatClasses: BoatClass[] = [];

  constructor(private dialog: MatDialog, private boatService: BoatService, private yardstickService: YardstickService, private settings: SettingsService, private timerPipe: TimerPipe){
    setInterval(() => {
      if(this.raceState>0 && this.raceState<3) this.now++;
      
      if(this.raceState == 1) {
        this.checkForSignals();
      }
      
      if(this.raceState == 1 && this.now >= 0) this.raceState=2;

      if(this.now>240 && this.preparationSignal < 4) {
        this.flags.x = false;// Take down X-Flag if the race is running for at least 4 minutes
        for(let boat of this.boats) boat.scoring = boat.earlyStart ? Scorings.OCS : boat.scoring; // Set non-started boats to OCS
      }
    }, 1000);
    this.boatClasses = this.boatService.boatClasses;

    if(window.localStorage.getItem('boats')) {
      try {
        this.boats = JSON.parse(window.localStorage.getItem('boats'));
        for(let boat of this.boats) boat.finish = -1;
      } catch(error) {
        window.localStorage.removeItem('boats');
        this.boats = []; 
      }
    }

    this.showFlags = this.settings.getSetting('starting.showFlags') === 'true';
  }

  addBoat() {
    this.boats.push({ name: this.newBoatName, class: this.newBoatClass, skipper: this.newBoatSkipper, crew: this.newBoatCrew, finish: -1, earlyStart: false, scoring: -1 });
    this.newBoatName = '';
    this.newBoatClass = undefined;
    this.newBoatSkipper = '';
    this.newBoatCrew = [];
    window.localStorage.setItem('boats', JSON.stringify(this.boats));
  }

  removeBoat(boat: Boat) {
    this.boats.splice(this.boats.findIndex(b => b.name == boat.name && b.class.name == boat.class.name), 1);
    window.localStorage.setItem('boats', JSON.stringify(this.boats));
  }

  boatStartedEarly(boat, event) {
    event.stopPropagation();
    boat.earlyStart = true;
    if(!this.flags.x && this.preparationSignal!==4 && this.preparationSignal!==5) {
      this.flags.x = true;
      this.horn('short');
    } else if(this.preparationSignal==4) {
      boat.scoring = Scorings.UFD;
    } else if(this.preparationSignal==5) {
      boat.scoring = Scorings.BFD;
    }
  }

  boatCompletedEarlyStartPenalty(boat, event) {
    event.stopPropagation();
    boat.earlyStart = false;
    var earlyStartersLeft = false;
    for(let boat of this.boats) {
      if(boat.earlyStart) {
        earlyStartersLeft=true;
        break;
      }
    }

    if(!earlyStartersLeft) {
      this.flags.x = false;
    }
  }

  boatFinished(boat, event) {
    event.stopPropagation();
    boat.finish = this.now;  
    boat.yardstickFinish = this.yardstickService.calculateYardstickTime(boat.finish, boat.class.yardstickNumber); 
    this.horn('short'); 

    //Check if all boats are finished
    if(this.boats.filter(boat => boat.finish !== -1).length == this.boats.length) this.raceState = 3;
  }

  startRace() {
    this.now = -this.countdown;
    this.raceState=1;

    this.flags.p = this.preparationSignal==0;
    this.flags.i = this.preparationSignal==1 || this.preparationSignal==3;
    this.flags.z = this.preparationSignal==2 || this.preparationSignal==3;
    this.flags.u = this.preparationSignal==4;
    this.flags.black = this.preparationSignal==5;

    this.checkForSignals();
  }

  cancelRace() {
    const dialogRef = this.dialog.open(ConfirmRaceCancelDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result === false) return;
      
      this.raceState = 0;
      this.now = 0;
      for(let boat of this.boats) {
        boat.earlyStart = false;
        boat.finish = -1;
        boat.scoring = -1;
      }
    });
  }

  private checkForSignals() {
    if(this.SIGNALS[-this.now] && this.SIGNALS[-this.now].horn) {
      // flag signals
      console.log('Flags', this.SIGNALS[-this.now].flags, this.flags);
      if(this.SIGNALS[-this.now].flags) {
        for(let flag in this.SIGNALS[-this.now].flags) {
          if(this.flags[flag] !== undefined) this.flags[flag] = this.SIGNALS[-this.now].flags[flag];
        }
      }
      // sound signals
      if(this.settings.getSetting('starting.toneSignals')==='true') {
        let soundSignal = this.SIGNALS[-this.now].horn;
        console.log('HORN:', soundSignal, this.settings.getSetting('starting.toneSignals'));
        if(soundSignal=='.') this.horn('short')
        else if(soundSignal=='-') this.horn('long')
      }
    } 
  }

  horn(length: string){
    let audio = new Audio();
    audio.src = "assets/horn_2_"+length+".mp3";
    audio.load();
    audio.play();
  }

  getResultString(): string {
    let result = `Ergebnisse der Regatta:\n`;
    let i = 1;
    for(let boat of this.boats.sort((a, b) => a.yardstickFinish - b.yardstickFinish)) {
      result += `\nPlatz ${i}\n${boat.name} (${boat.class.name})\n${(new ScoringPipe()).transform(boat.scoring, false)} (${(new ScoringPipe()).transform(boat.scoring, true)})\nYardstickzeit: ${this.timerPipe.transform(boat.yardstickFinish)}\nEchtzeit: ${this.timerPipe.transform(boat.finish)}\n`;
      i++;
    }
    return result;
  }

  openScoringDialog(boat) {
    const dialogRef = this.dialog.open(RaceBoatScoringDialogComponent, { data: boat.scoring });

    dialogRef.afterClosed().subscribe(result => {
      if(result === undefined) return;
      boat.scoring = result;
    });
  }

  addNewBoatCrew(event) {
    this.newBoatCrew.push(event.value);
    event.chipInput.clear();
    console.log('event', event);
  }

  removeNewBoatCrew(crew) {
    this.newBoatCrew.splice(this.newBoatCrew.indexOf(crew));
  }

}

@Pipe({
  name: 'isFinished',
  pure: false
})
export class IsFinishedPipe implements PipeTransform {
  transform(items: any[], finished: Boolean): any {
      if (!items || finished==undefined) {
          return items;
      }
      // filter items array, items which match and return true will be
      // kept, false will be filtered out
      if(finished) return items.filter(item => item.finish !== -1).sort((a, b) => a.yardstickFinish - b.yardstickFinish);
      else return items.filter(item => item.finish == -1);
  }
}

@Component({
  selector: 'race-boat-scoring-dialog',
  template: `
    <h2>Wertung eintragen</h2>
    <mat-dialog-content>
      <scoring-select [(value)]='scoringValue'></scoring-select> 
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="undefined">Abbrechen</button>
      <button mat-button [mat-dialog-close]="scoringValue" cdkFocusInitial>Okay</button>
    </mat-dialog-actions>
  `
})
export class RaceBoatScoringDialogComponent {
// [(value)]='boat.scoring'
  constructor(@Inject(MAT_DIALOG_DATA) public scoringValue: number) {}
}

//---------------------

@Component({
  selector: 'confirm-race-cancel-dialog',
  template: `
    <h2>Wirklich abbrechen</h2>
    <mat-dialog-content>
      <p>Bist du sicher, dass du die Wettfahrt abbrechen willst?</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false" cdkFocusInitial>Nein</button>
      <button mat-button color='warn' [mat-dialog-close]="true">Ja, Wettfahrt abbrechen</button>
    </mat-dialog-actions>
  `
})
export class ConfirmRaceCancelDialogComponent {
}