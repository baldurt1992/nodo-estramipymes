// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { roles } from '../models/roles';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: { email: string; role: string } | null = null;

  constructor(private router: Router) {}

  login(email: string, role: string) {
    this.currentUser = { email, role };
    sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    this.router.navigate(['/dashboard']);
  }

  logout() {
    this.currentUser = null;
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getCurrentUser() {
    if (!this.currentUser) {
      const user = sessionStorage.getItem('currentUser');
      this.currentUser = user ? JSON.parse(user) : null;
    }
    return this.currentUser;
  }

  hasRole(role: string): boolean {
    const user = this.getCurrentUser();
    return user ? user.role === role : false;
  }

  hasAnyRole(roles: string[]): boolean {
    const user = this.getCurrentUser();
    return user ? roles.includes(user.role) : false;
  }
}
