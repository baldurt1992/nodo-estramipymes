import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CarouselComponent, RouterLink],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
})
export class HeroBannerComponent {}
