import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingGroups = [{
    id: 'starting',
    title: 'Startsequenz',
    inputs: [{
      id: 'toneSignals',
      title: 'Tonsignale',
      type: 'boolean',
      default: true,
      value: undefined
    }, {
      id: 'showFlags',
      title: 'Nötige Flaggen anzeigen',
      type: 'boolean',
      default: true,
      value: undefined
    }]
  }]
  constructor(private settingsService: SettingsService) {
    this.getAllSettingValues();
  }

  ngOnInit(): void {
  }


  private getAllSettingValues() {
    for(let group of this.settingGroups) {
      for(let setting of group.inputs) {
        setting.value = this.settingsService.getSetting(group.id+'.'+setting.id);
        if(setting.value===null) this.settingsService.setSetting(group.id+'.'+setting.id, setting.default);
      }
    }
  }

  private settingInputChangeHandler(event, group, setting) {
    const settingId = group.id+'.'+setting.id;
    this.settingsService.setSetting(settingId, event.checked);
  }

}
