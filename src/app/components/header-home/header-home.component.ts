import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { CompleteFormBtnComponent } from '../complete-form-btn/complete-form-btn.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { DashboardBtnComponent } from '../dashboard-btn/dashboard-btn.component';
@Component({
  selector: 'app-header-home',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    CompleteFormBtnComponent,
    DashboardBtnComponent,
  ],
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css'],
})
export class HeaderHomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  isClient: boolean = false;
  onFormPage: boolean = false;
  formCompleted: boolean = false;

  private routerSubscription: Subscription | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    if (user) {
      this.isLoggedIn = true;
      this.isClient = user.role === 'client';
      this.formCompleted = user.formCompleted || false;
    }
    this.onFormPage = this.router.url.includes('/questionnaire');

    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.onFormPage = this.router.url.includes('/questionnaire');
      });
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }
}
