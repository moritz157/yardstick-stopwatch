import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  boatClasses: BoatClass[] = [
    {
      name: '420',
      yardstickNumber: 115
    }, {
      name: 'Teeny',
      yardstickNumber: 140
    },
    {
      name: 'Topper',
      yardstickNumber: 139
    }, {
      name: 'Conger',
      yardstickNumber: 118
    }, {
      name: 'Optimist',
      yardstickNumber: 173
    }, {
      name: 'Laser Standard',
      yardstickNumber: 113
    }
  ]

  constructor() { }
}

export interface BoatClass {
  name: string;
  yardstickNumber: number;
}

export interface Boat {
  name: string;
  class: BoatClass;
  skipper?: string;
  crew?: string[];
  earlyStart: boolean;
  finish: number;
  scoring: number;
  yardstickFinish?: number;
}