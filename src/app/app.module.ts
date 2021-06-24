import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmRaceCancelDialogComponent, IsFinishedPipe, RaceBoatScoringDialogComponent, RaceComponent } from './race/race.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { TimerPipe } from './timer.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SettingsComponent } from './settings/settings.component';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { ScoringPipe } from './enums/scorings';
import { ScoringSelectComponent } from './utils/scoring-select/scoring-select.component';
import { RulesComponent } from './rules/rules.component';
import { RacingSeriesComponent } from './racing-series/racing-series.component';
import { AddSeriesBoatDialog, EditSeriesComponent } from './racing-series/edit-series/edit-series.component';
import { MatNativeDateModule } from '@angular/material/core';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    RaceBoatScoringDialogComponent,
    ConfirmRaceCancelDialogComponent,
    TimerPipe,
    IsFinishedPipe,
    SettingsComponent,
    ScoringPipe,
    ScoringSelectComponent,
    RulesComponent,
    RacingSeriesComponent,
    EditSeriesComponent,
    AddSeriesBoatDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatExpansionModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ClipboardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: "registerImmediately" })
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'de-DE' }]
})
export class AppModule { }
