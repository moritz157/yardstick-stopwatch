import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceComponent } from './race/race.component';
import { EditSeriesComponent } from './racing-series/edit-series/edit-series.component';
import { RacingSeriesComponent } from './racing-series/racing-series.component';
import { RulesComponent } from './rules/rules.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: RaceComponent },
  { path: 'race', redirectTo: '' },
  { path: 'racingSeries', component: RacingSeriesComponent },
  { path: 'series/:id/edit', component: EditSeriesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
