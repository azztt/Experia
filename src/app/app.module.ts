import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenComponent } from './expen/expen.component';
import { GraphComponent } from './graph/graph.component';
import { CreditComponent } from './credit/credit.component';
import { RemainComponent } from './remain/remain.component';
// import { YearComponent } from './year/year.component';
// import { MonthComponent } from './month/month.component';
// import { DayComponent } from './day/day.component';
import { DisplayComponent } from './display/display.component';
// import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenComponent,
    GraphComponent,
    CreditComponent,
    RemainComponent,
    // YearComponent,
    // MonthComponent,
    // DayComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
