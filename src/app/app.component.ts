import { ApplicationConfig, Component } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './view/register/register.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { HomeComponent } from './view/home/home.component';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()],
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RegisterComponent,
    FormRegisterComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'estramipymes';
}
