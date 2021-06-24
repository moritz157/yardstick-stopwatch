import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [{
    title: 'Einfaches Rennen',
    link: 'race',
    icon: 'sports_score'
  }, {
    title: 'Rennserien',
    link: 'racingSeries',
    icon: 'format_list_numbered'
  },
  {
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
