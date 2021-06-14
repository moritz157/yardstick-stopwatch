import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Boat, BoatClass, BoatService } from '../services/boat.service';
import { SettingsService } from '../services/settings.service';
import { YardstickService } from '../services/yardstick.service';
import { TimerPipe } from '../timer.pipe';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
  providers: [ TimerPipe ]
})
export class RaceComponent {

  SIGNALS = {
    300: {
      horn: '.'
    }, //5 Minutes
    240: {
      horn: '.'
    }, //4 Minutes
    60: {
      horn: '.'
    }, //1 Minute
    0: {
      horn: '-'
    }
  }

  raceState: number = 0; //0=Not started, 1=Countdown, 2=Started, 3=Finished
  now: number = 0; //Seconds since start, negative if on countdown 
  countdown: number = 300;

  boats: Boat[] = [];

  newBoatName: string = '';
  newBoatClass: BoatClass = undefined;
  boatClasses: BoatClass[] = [];

  constructor(private boatService: BoatService, private yardstickService: YardstickService, private settings: SettingsService, private timerPipe: TimerPipe){
    setInterval(() => {
      if(this.raceState>0 && this.raceState<3) this.now++;
      
      if(this.raceState == 1) {
        this.checkForSignals();
      }
      
      if(this.raceState == 1 && this.now >= 0) this.raceState=2;
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
  }

  addBoat() {
    this.boats.push({ name: this.newBoatName, class: this.newBoatClass, finish: -1 });
    this.newBoatName = '';
    this.newBoatClass = undefined;
    window.localStorage.setItem('boats', JSON.stringify(this.boats));
  }

  removeBoat(boat: Boat) {
    this.boats.splice(this.boats.findIndex(b => b.name == boat.name && b.class.name == boat.class.name), 1);
    window.localStorage.setItem('boats', JSON.stringify(this.boats));
  }

  boatFinished(boat) {
    boat.finish = this.now;  
    boat.yardstickFinish = this.yardstickService.calculateYardstickTime(boat.finish, boat.class.yardstickNumber); 
    this.horn('short'); 

    //Check if all boats are finished
    if(this.boats.filter(boat => boat.finish !== -1).length == this.boats.length) this.raceState = 3;
  }

  startRace() {
    this.now = -this.countdown;
    this.raceState=1;
    this.checkForSignals();
  }

  cancelRace() {
    this.raceState = 0;
    this.now = 0;
    for(let boat of this.boats) boat.finish = -1;
  }

  private checkForSignals() {
    if(this.settings.getSetting('starting.toneSignals')=='false') return;
    if(this.SIGNALS[-this.now] && this.SIGNALS[-this.now].horn) {
      let signal = this.SIGNALS[-this.now].horn;
      console.log('HORN:', signal, this.settings.getSetting('starting.toneSignals'));
      if(signal=='.') this.horn('short')
      else if(signal=='-') this.horn('long')
    } 
  }

  horn(length: string){
    let audio = new Audio();
    audio.src = "../../../assets/horn_2_"+length+".mp3";
    audio.load();
    audio.play();
  }

  getResultString(): string {
    let result = `Ergebnisse der Regatta:\n`;
    let i = 1;
    for(let boat of this.boats.sort((a, b) => a.yardstickFinish - b.yardstickFinish)) {
      result += `\nPlatz ${i}\n${boat.name} (${boat.class.name})\nYardstickzeit: ${this.timerPipe.transform(boat.yardstickFinish)}\nEchtzeit: ${this.timerPipe.transform(boat.finish)}\n`;
      i++;
    }
    return result;
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