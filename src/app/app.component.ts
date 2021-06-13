import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [{
    title: 'Rennen',
    link: 'race',
    icon: 'home'
  }, {
    title: 'Regeln',
    link: 'rules',
    icon: 'gavel'
  },
  {
    title: 'Einstellungen',
    link: 'settings',
    icon: 'settings'
  }]
}
