import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OptionsComponent } from './options/options.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { CocinaComponent } from './cocina/cocina.component';
import { SalonComponent } from './salon/salon.component';
import { WcComponent } from './wc/wc.component';
import { DormitorioComponent } from './dormitorio/dormitorio.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'main-menu',component:MainMenuComponent},
  {path:'options',component:OptionsComponent},
  {path:'tutorial',component:TutorialComponent},
  {path:'cocina',component:CocinaComponent},
  {path:'salon',component:SalonComponent},
  {path:'wc',component:WcComponent},
  {path:'dormitorio',component:DormitorioComponent},
  {path: 'ui',component:UiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
