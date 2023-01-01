import {Component, OnInit} from '@angular/core';
import {Trip} from "../trip";
import {TripStoreService} from "../trip-store.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card-einzeluebersicht',
  templateUrl: './card-einzeluebersicht.component.html',
  styleUrls: ['./card-einzeluebersicht.component.css']
})
export class CardEinzeluebersichtComponent implements OnInit {

  trip: Trip;


  constructor(private tripStore: TripStoreService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.tripStore.getSingle(params.get('id') ?? '')
      .subscribe(t => this.trip = t);
  }

}
