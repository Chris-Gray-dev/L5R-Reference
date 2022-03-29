import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { DynamicHooksModule } from 'ngx-dynamic-hooks';
import { HookParserEntry } from 'ngx-dynamic-hooks';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { OpportunityComponent } from './Components/opportunity/opportunity.component';
import { NinjitsuComponent } from './Components/ninjitsu/ninjitsu.component';
import { KataComponent } from './Components/kata/kata.component';
import { KihoComponent } from './Components/kiho/kiho.component';
import { InvocationsComponent } from './Components/invocations/invocations.component';
import { RitualsComponent } from './Components/rituals/rituals.component';
import { ShujiComponent } from './Components/shuji/shuji.component';
import { MahoComponent } from './Components/maho/maho.component';
import { StarredComponent } from './Components/starred/starred.component';
import { NinjitsuCardComponent } from './Components/ninjitsu-card/ninjitsu-card.component';
import { KataCardComponent } from './Components/kata-card/kata-card.component';
import { KihoCardComponent } from './Components/kiho-card/kiho-card.component';
import { InvocationCardComponent } from './Components/invocation-card/invocation-card.component';
import { MahoCardComponent } from './Components/maho-card/maho-card.component';
import { RitualCardComponent } from './Components/ritual-card/ritual-card.component';
import { ShujiCardComponent } from './Components/shuji-card/shuji-card.component';
import { CheckComponent } from './Components/check/check.component';

const componentParsers: Array<HookParserEntry> = [
  {
    component: OpportunityComponent,
    enclosing: false,
  },
  {
    component: CheckComponent,
  },
];

const dynamicComponents = [OpportunityComponent, CheckComponent];

@NgModule({
  declarations: [
    AppComponent,
    OpportunityComponent,
    NinjitsuComponent,
    KataComponent,
    KihoComponent,
    InvocationsComponent,
    RitualsComponent,
    ShujiComponent,
    MahoComponent,
    StarredComponent,
    NinjitsuCardComponent,
    KataCardComponent,
    KihoCardComponent,
    InvocationCardComponent,
    MahoCardComponent,
    RitualCardComponent,
    ShujiCardComponent,
    CheckComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    DynamicHooksModule.forRoot({
      globalParsers: componentParsers,
    }),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
  entryComponents: [...dynamicComponents],
})
export class AppModule {}
