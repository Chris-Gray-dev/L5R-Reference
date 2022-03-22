import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InvocationsComponent } from './Components/invocations/invocations.component';
import { KataComponent } from './Components/kata/kata.component';
import { KihoComponent } from './Components/kiho/kiho.component';
import { MahoComponent } from './Components/maho/maho.component';
import { NinjitsuComponent } from './Components/ninjitsu/ninjitsu.component';
import { RitualsComponent } from './Components/rituals/rituals.component';
import { ShujiComponent } from './Components/shuji/shuji.component';
import { StarredComponent } from './Components/starred/starred.component';

const routes: Routes = [
  { path: 'kata', component: KataComponent },
  { path: 'kiho', component: KihoComponent },
  { path: 'invocations', component: InvocationsComponent },
  { path: 'rituals', component: RitualsComponent },
  { path: 'shuji', component: ShujiComponent },
  { path: 'maho', component: MahoComponent },
  { path: 'ninjitsu', component: NinjitsuComponent },
  { path: 'starred', component: StarredComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
