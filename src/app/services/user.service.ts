import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = [
    {
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin',
      name: 'Andrés Baldur Tamayo Marín',
    },
    {
      email: 'client1@example.com',
      password: 'client123',
      role: 'client',
      name: 'Pedro Rivas Osorio',
      formCompleted: false,
    },
    {
      email: 'client2@example.com',
      password: 'client123',
      role: 'client',
      name: 'Ramiro Wayne Roonie',
      formCompleted: true,
    },
    {
      email: 'client3@example.com',
      password: 'client123',
      role: 'client',
      name: 'Laura Martínez',
      formCompleted: false,
    },
    {
      email: 'client4@example.com',
      password: 'client123',
      role: 'client',
      name: 'Jorge González',
      formCompleted: true,
    },
    {
      email: 'client5@example.com',
      password: 'client123',
      role: 'client',
      name: 'Ana Gómez',
      formCompleted: false,
    },
    {
      email: 'client6@example.com',
      password: 'client123',
      role: 'client',
      name: 'Luis Rodríguez',
      formCompleted: true,
    },
    {
      email: 'client7@example.com',
      password: 'client123',
      role: 'client',
      name: 'Carla Herrera',
      formCompleted: false,
    },
    {
      email: 'client8@example.com',
      password: 'client123',
      role: 'client',
      name: 'José Silva',
      formCompleted: true,
    },
    {
      email: 'client9@example.com',
      password: 'client123',
      role: 'client',
      name: 'Fernanda Ruiz',
      formCompleted: false,
    },
    {
      email: 'client10@example.com',
      password: 'client123',
      role: 'client',
      name: 'Ricardo Sánchez',
      formCompleted: true,
    },
    {
      email: 'client11@example.com',
      password: 'client123',
      role: 'client',
      name: 'Valeria Morales',
      formCompleted: false,
    },
    {
      email: 'client12@example.com',
      password: 'client123',
      role: 'client',
      name: 'Tomás Vega',
      formCompleted: true,
    },
    {
      email: 'student@example.com',
      password: 'student123',
      role: 'student',
      name: 'Nora Pérez Mbappe',
    },
  ];

  getUser(email: string, password: string) {
    return this.users.find(
      (user) => user.email === email && user.password === password
    );
  }

  getCurrentUser() {
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    sessionStorage.removeItem('currentUser');
  }

  completeForm(email: string) {
    const user = this.users.find(
      (user) => user.email === email && user.role === 'client'
    );
    if (user) {
      user.formCompleted = true;
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  getClients() {
    return this.users.filter((user) => user.role === 'client');
  }

  updateUser(updatedUser: any) {
    const index = this.users.findIndex(
      (user) => user.email === updatedUser.email
    );
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(email: string) {
    this.users = this.users.filter((user) => user.email !== email);
  }
}
