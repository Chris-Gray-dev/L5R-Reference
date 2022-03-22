import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { MatTabsModule } from '@angular/material/tabs';
import { OpportunityComponent } from './Components/opportunity/opportunity.component';
import { NinjitsuComponent } from './Components/ninjitsu/ninjitsu.component';
import { KataComponent } from './Components/kata/kata.component';
import { KihoComponent } from './Components/kiho/kiho.component';
import { InvocationsComponent } from './Components/invocations/invocations.component';
import { RitualsComponent } from './Components/rituals/rituals.component';
import { ShujiComponent } from './Components/shuji/shuji.component';
import { MahoComponent } from './Components/maho/maho.component';
import { StarredComponent } from './Components/starred/starred.component';

@NgModule({
  declarations: [AppComponent, OpportunityComponent, NinjitsuComponent, KataComponent, KihoComponent, InvocationsComponent, RitualsComponent, ShujiComponent, MahoComponent, StarredComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
