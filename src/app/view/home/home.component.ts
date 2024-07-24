import { Component } from '@angular/core';
import { HeaderHomeComponent } from '../../components/header-home/header-home.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { AboutComponent } from '../../components/about/about.component';
import { MethodologyComponent } from '../../components/methodology/methodology.component';
import { OurServicesComponent } from '../../components/our-services/our-services.component';
import { SuccessStoriesComponent } from '../../components/success-stories/success-stories.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { BookComponent } from '../../components/book/book.component';
import { WsppBtnComponent } from '../../components/wspp-btn/wspp-btn.component';
import { MiniBannerComponent } from '../../components/mini-banner/mini-banner.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderHomeComponent,
    HeroBannerComponent,
    RouterLink,
    FooterComponent,
    MatButtonModule,
    MatCardModule,
    AboutComponent,
    MethodologyComponent,
    OurServicesComponent,
    SuccessStoriesComponent,
    ContactComponent,
    BookComponent,
    WsppBtnComponent,
    MiniBannerComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
