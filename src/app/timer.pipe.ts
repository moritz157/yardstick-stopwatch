import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): String {
    value = Math.abs(value);
    let hours = Math.floor(value / 3600);
    let minutes = Math.floor((value-(hours*3600)) / 60);
    let seconds = value % 60;

    let result = `${ hours>9 ? hours : '0'+hours}:${ minutes>9 ? minutes : '0'+minutes}:${ seconds>9 ? seconds : '0'+seconds }`;

    return result;
  }

}
