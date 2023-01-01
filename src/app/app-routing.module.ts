import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import {CardEinzeluebersichtComponent} from "./card/card-einzeluebersicht/card-einzeluebersicht.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rt-card',
    pathMatch: 'full'
  }, {
    path: 'rt-card',
    component: MainMenuComponent
  }, {
  path: 'trip/:id',
    component: CardEinzeluebersichtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
