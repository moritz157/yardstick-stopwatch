import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-racing-series',
  templateUrl: './racing-series.component.html',
  styleUrls: ['./racing-series.component.scss']
})
export class RacingSeriesComponent implements OnInit {

  allSeries = [{
    id: 0,
    title: 'Übungsreihe',
    start: new Date('2020-06-19'),
    end: new Date('2020-06-19'),
    status: RacingSeriesStatus.PLANNED,
    boats: []
  }, {
    id: 1,
    title: 'Übungsreihe 2',
    start: new Date('2020-06-19'),
    end: new Date('2020-06-19'),
    status: RacingSeriesStatus.RUNNING,
    boats: []
  }, {
    id: 2,
    title: 'Mittwochsregatta',
    start: new Date('2020-06-19'),
    end: new Date('2020-06-19'),
    status: RacingSeriesStatus.COMPLETED,
    boats: []
  }, {
    id: 3,
    title: 'Große Sommerregatta',
    start: new Date('2020-06-19'),
    end: new Date('2020-06-19'),
    status: RacingSeriesStatus.CANCELLED,
    boats: []
  }]
  constructor() { }

  ngOnInit(): void {
  }

}

export enum RacingSeriesStatus {
  PLANNED,
  RUNNING,
  COMPLETED,
  CANCELLED
}