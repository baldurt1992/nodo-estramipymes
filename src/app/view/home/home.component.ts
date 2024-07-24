import { Component } from '@angular/core';
import { HeaderHomeComponent } from '../../components/header-home/header-home.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderHomeComponent,
    CarouselComponent,
    RouterLink,
    FooterComponent,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
