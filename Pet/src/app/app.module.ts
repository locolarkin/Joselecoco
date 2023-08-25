import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MainMenuComponent } from './main-menu/main-menu.component';
import { OptionsComponent } from './options/options.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { CocinaComponent } from './cocina/cocina.component';
import { SalonComponent } from './salon/salon.component';
import { WcComponent } from './wc/wc.component';
import { DormitorioComponent } from './dormitorio/dormitorio.component';
import { UiComponent } from './ui/ui.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    OptionsComponent,
    TutorialComponent,
    CocinaComponent,
    SalonComponent,
    WcComponent,
    DormitorioComponent,
    UiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
