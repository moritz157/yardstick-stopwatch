import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceComponent } from './race/race.component';
import { RulesComponent } from './rules/rules.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: RaceComponent },
  { path: 'race', redirectTo: '' },
  { path: 'rules', component: RulesComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
