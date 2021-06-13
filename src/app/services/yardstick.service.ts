import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YardstickService {
  
  constructor() { }

  calculateYardstickTime(stoppedSeconds: number, yardstickNumber: number): number {
    return Math.floor(stoppedSeconds*100/yardstickNumber);
  }
}