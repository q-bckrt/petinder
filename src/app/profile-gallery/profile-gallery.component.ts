import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {PetService} from '../service/pet.service';
import {Pet} from '../model/Pet';
import {Observable} from 'rxjs';

// This component is responsible for displaying the pet gallery in the layout.
@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit {
   // The petService is injected to retrieve the pets from the server.
   petService: PetService = inject(PetService);
   // This will contain the retrieved pets as an Observable,
  // which will be unwrapped using the async pipe in the template.
   pets$!: Observable<Pet[]>;

   // This method will be automatically called when the component is initialized.
  // So when the component is loaded, it will call the getPets() method.
   ngOnInit() {
     this.getPets()
   }

   // This method retrieves the pets from the server using the petService.
    getPets() {
      this.pets$ = this.petService.getPets();
    }
}
