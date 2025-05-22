import {TestBed} from '@angular/core/testing';
import {PetService} from "./pet.service";
import {provideHttpClient} from "@angular/common/http";
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {Pet} from '../model/Pet';


describe('TestService', () => {
  let service: PetService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient()]});
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(PetService);
  });

  it('should verify the http call', (done) => {
    // given
    const petsResult: Pet[] = [
      {id: 1, name: 'test 1', kind: 'cat', image: 'test_1.jpg', breed:'test_breed1', profileText: 'test', popularity: 1},
      {id: 2, name: 'test 2', kind: 'dog', image: 'test_2.jpg', breed:'test_breed2', profileText: 'test', popularity: 2}
    ];
    const httpClientSpy = jest
      .spyOn(httpClient, 'get')
      .mockReturnValue(of(petsResult));

    // when
    let pets = service.getPets().subscribe((pets: Pet[]) => {
      // then
      expect(httpClientSpy).toHaveBeenCalled();
      expect(pets).toEqual(petsResult);
      done();
    });
  });
});
