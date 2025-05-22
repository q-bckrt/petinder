import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PetService {
  readonly #httpClient = inject(HttpClient);
  private pets: string;

  constructor() {
    this.pets = environment.backendURL;
  }

  getPets(): Observable<any> {
    return this.#httpClient.get(this.pets);
  }
}
