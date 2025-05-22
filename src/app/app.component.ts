import { Component } from '@angular/core';
import {LayoutComponent} from './layout/layout.component';

// This is the root component of the application.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'petinder';
}
