import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

// Makes this service injectable, so it can be used (injected) easily in other components.
// (In this case, the pet gallery component)
@Injectable({
  providedIn: 'root'
})
export class PetService {
  private readonly httpClient = inject(HttpClient);
  private readonly pets: string;

  // just assigns the pet server's URL to the pets variable
  constructor() {
    this.pets = environment.backendURL;
  }

  // retrieve the pets from the server as an Observable
  getPets(): Observable<any> {
    return this.httpClient.get(this.pets);
  }
}
