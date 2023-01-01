import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { RtCardsComponent } from './card/rt-cards/rt-cards.component';
import { CardItemComponent } from './card/card-item/card-item.component';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatBadgeModule} from "@angular/material/badge";
import {MatRippleModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {TripFilterPipe} from "./shared/filter.pipe";
import { CardEinzeluebersichtComponent } from './card/card-einzeluebersicht/card-einzeluebersicht.component';
import { SinglepageHeaderComponent } from './card/singlepage-header/singlepage-header.component';
import {RouteReuseStrategy} from "@angular/router";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainHeaderComponent,
    RtCardsComponent,
    CardItemComponent,
    TripFilterPipe,
    CardEinzeluebersichtComponent,
    SinglepageHeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatRippleModule,
    MatInputModule,
    FormsModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
