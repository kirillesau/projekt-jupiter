import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Trip} from "./trip";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TripStoreService {
  private api = 'http://localhost:8080/rt-card-api'
  constructor(private http: HttpClient) { }

  getSingle(id: string): Observable<Trip> {
    return this.http.get<any>(`${this.api}/trip/${id}`)
  }

  getAll(): Observable<Trip[]>{
    return this.http.get<any>(`${this.api}/trips`);
  }
}
