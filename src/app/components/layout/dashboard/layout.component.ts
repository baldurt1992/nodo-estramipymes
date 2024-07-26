import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { PopupFormComponent } from '../../popup-form/popup-form.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet,
    CommonModule,
    PopupFormComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export default class LayoutComponent implements OnInit {
  currentUser: any;
  showPopup: boolean = false;
  formCompleted: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const user = this.userService.getCurrentUser();
    if (user) {
      this.currentUser = user;
      if (user.role === 'client' && !user.formCompleted) {
        this.showPopup = true;
      }
    }
  }

  completeForm() {
    if (this.currentUser) {
      this.userService.completeForm(this.currentUser.email);
      this.showPopup = false;
    }
  }
}
