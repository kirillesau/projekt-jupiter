import {Component, OnInit} from '@angular/core';
import {Trip} from "../trip";
import {TripStoreService} from "../trip-store.service";

@Component({
  selector: 'app-rt-cards',
  templateUrl: './rt-cards.component.html',
  styleUrls: ['./rt-cards.component.css']
})
export class RtCardsComponent implements OnInit {

  trips: Trip[];
  IsLoading: boolean = false;
  value = '';

  constructor(private tripStore: TripStoreService) {
  }

  ngOnInit(): void {
    this.IsLoading = true;

    this.tripStore.getAll().subscribe(tripsRes => {
      this.IsLoading = false;
      return this.trips = tripsRes;
    }, error => this.IsLoading = false);
    console.error(this.trips);
  }
}
