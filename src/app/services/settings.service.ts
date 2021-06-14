import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  SETTINGS_PREFIX = 'yardstickStopwatch.settings.';
  constructor() { }

  getSetting(id) {
    return window.localStorage.getItem(this.SETTINGS_PREFIX+id);
  }

  setSetting(id, value) {
    window.localStorage.setItem(this.SETTINGS_PREFIX+id, value);
  }
}
