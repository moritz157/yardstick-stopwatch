import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Boat, BoatClass, BoatService } from 'src/app/services/boat.service';

@Component({
  selector: 'app-edit-series',
  templateUrl: './edit-series.component.html',
  styleUrls: ['./edit-series.component.scss']
})
export class EditSeriesComponent implements OnInit {

  series = {
    title: '',
    start: undefined,
    end: undefined,
    boats: [{ 
      name: 'Testboot',
      class: this.boatService.boatClasses[0],
      skipper: 'Moritz Ahrens',
      crew: [],
      finish: -1,
      earlyStart: false,
      scoring: -1 
    }]
  }
  constructor(public dialog: MatDialog, private boatService: BoatService) { }

  ngOnInit(): void {
  }

  addEvent(eventType, $event) {
    console.log(eventType, $event);
  }

  addSeriesBoat() {
    this.openAddSeriesBoatDialog(undefined, (newBoat) => {
      if(!newBoat) return;
      this.series.boats.push(newBoat);
    })
  }

  editSeriesBoat(boat) {
    this.openAddSeriesBoatDialog({...boat}, (result) => {
      if(!result) return;
      boat.name = result.name;
      boat.class = result.class;
      boat.skipper = result.skipper;
      boat.crew = result.crew;
      //boat = {...result};
    })
  }

  removeSeriesBoat(boat: Boat) {
    this.series.boats.splice(this.series.boats.findIndex(b => b.name == boat.name && b.class.name == boat.class.name), 1);
    window.localStorage.setItem('boats', JSON.stringify(this.series.boats));
  }

  openAddSeriesBoatDialog(data, callback): void {
    const dialogRef = this.dialog.open(AddSeriesBoatDialog, {
      width: '250px',
      data: data || {name: '', class: undefined, skipper: '', crew: []}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      callback(result);
    });
  }

}

@Component({
  selector: 'add-series-boat-dialog',
  template: `
  <h1 mat-dialog-title>Boot melden</h1>
  <div mat-dialog-content>
    <mat-form-field>
      <mat-label>Segelzeichen</mat-label>
      <input matInput [(ngModel)]="data.name">
    </mat-form-field>
    <mat-form-field>
      <mat-label>Klasse</mat-label>
      <mat-select [(ngModel)]='data.class'>
        <mat-option *ngFor='let boatClass of boatClasses' [value]='boatClass'>{{ boatClass.name }}</mat-option>
      </mat-select>
    </mat-form-field>
    <mat-form-field>
        <mat-label>Skipper (optional)</mat-label>
        <input matInput type='text' [(ngModel)]='data.skipper'>
    </mat-form-field>
    <mat-form-field class="example-chip-list">
        <mat-label>Crewmitglieder (optional)</mat-label>
        <mat-chip-list #chipList>
          <mat-chip *ngFor="let crew of data.crew" [selectable]="true"
                   [removable]="true" (removed)="removeNewBoatCrew(crew)">
            {{ crew }}
            <mat-icon matChipRemove>cancel</mat-icon>
          </mat-chip>
          <input placeholder="Neues Crewmitglied..."
                 [matChipInputFor]="chipList"
                 [matChipInputSeparatorKeyCodes]="[13, 188]"
                 (matChipInputTokenEnd)="addNewBoatCrew($event)">
        </mat-chip-list>
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Abbrechen</button>
    <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Fertig</button>
  </div>`,
})
export class AddSeriesBoatDialog {

  boatClasses: BoatClass[] = [];
  constructor(public dialogRef: MatDialogRef<AddSeriesBoatDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private boatService: BoatService) {
      this.boatClasses = this.boatService.boatClasses;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewBoatCrew(event) {
    this.data.crew.push(event.value);
    event.chipInput.clear();
    console.log('event', event);
  }

  removeNewBoatCrew(crew) {
    this.data.crew.splice(this.data.crew.indexOf(crew));
  }

}