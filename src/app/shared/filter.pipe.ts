import { Pipe, PipeTransform } from '@angular/core';
import {Trip} from "../card/trip";

@Pipe({ name: 'tripFilter' })
export class TripFilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: Trip[], searchText: string): any[] {
    console.log(searchText);

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.tripName.toLocaleLowerCase().includes(searchText);
    });
  }
}
