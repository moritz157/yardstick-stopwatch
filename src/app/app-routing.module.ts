import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceComponent } from './race/race.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: RaceComponent },
  { path: 'race', redirectTo: '' },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
