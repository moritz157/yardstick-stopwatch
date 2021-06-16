import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Scorings } from 'src/app/enums/scorings';

@Component({
  selector: 'scoring-select',
  templateUrl: './scoring-select.component.html',
  styleUrls: ['./scoring-select.component.scss']
})
export class ScoringSelectComponent {

  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();

  scoringEnumList = [];

  constructor() {
    this.scoringEnumList = Object.keys(Scorings).filter(key => isNaN(+key));
  }

  handleValueChange(event) {
    this.value = event.value;
    this.valueChange.emit(this.value);
  }

}
