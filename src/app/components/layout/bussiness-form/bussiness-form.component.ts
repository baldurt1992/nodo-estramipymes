import { Component } from '@angular/core';
import { HeaderHomeComponent } from '../../header-home/header-home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bussiness-form',
  standalone: true,
  imports: [HeaderHomeComponent, RouterOutlet],
  templateUrl: './bussiness-form.component.html',
  styleUrl: './bussiness-form.component.css',
})
export class BussinessFormComponent {}
