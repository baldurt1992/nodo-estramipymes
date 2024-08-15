import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';
import { roles } from '../../models/roles';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    RouterLink,
  ],
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit, AfterViewInit {
  currentUser: any;

  displayedColumns: string[] = ['name', 'email', 'role', 'formCompleted'];

  dataSource = new MatTableDataSource<any>();
  editMode: { [key: string]: boolean } = {};

  availableRoles = Object.values(roles);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.loadUsers();
    if (this.currentUser?.role === roles.ADMIN) {
      this.displayedColumns.push('actions');
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadUsers() {
    if (this.currentUser?.role === roles.ADMIN) {
      this.dataSource.data = this.userService.getAllUsers();
    } else {
      this.dataSource.data = this.userService.getClients();
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editUser(user: any) {
    this.editMode[user.email] = true;
  }

  saveUser(user: any) {
    this.userService.updateUser(user);
    this.editMode[user.email] = false;
    this.loadUsers();
  }

  cancelEdit(user: any) {
    this.editMode[user.email] = false;
    this.loadUsers();
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user.email);
    this.loadUsers();
  }
}
