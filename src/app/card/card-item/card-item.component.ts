import {Component, Input} from '@angular/core';
import {Trip} from "../trip";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {

  @Input() trip: Trip;


  constructor(private router: Router) {
  }

  backgroundColor(art: String): object {
    let result: string = "white";

    switch (art) {
      case "Achterbahn & Co.": {
        result = '#f6afaa';
        break;
      }
      case "Abenteuer NRW": {
        result = '#bdb3cc';
        break;
      }
      case "Welkom Niederlande": {
        result = '#f5aa41';
        break;
      }
      case "Vorhang auf": {
        result = '#9bc8aa';
        break;
      }
      case "Erlebnis, Spass & Action": {
        result = '#e1f5aa';
        break;
      }
      case "Schätze & Museen": {
        result = '#b9d282';
        break;
      }
      case "Schifffahrt & Bäder": {
        result = '#c8dedc';
        break;
      }
      case "Erlebnis Industriekultur": {
        result = '#fac88c';
        break;
      }
    }

    return {'background': `${result}`};
  }

  navigateToSinglePage() {
    this.router.navigate([`/trip/${this.trip.id}`])
  }
}
