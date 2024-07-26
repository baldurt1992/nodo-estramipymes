import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserFormResponses } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class ResponseService {
  private userFormResponses: UserFormResponses[] = [
    {
      email: 'client2@example.com',
      name: 'Ramiro Wayne Roonie',
      formCompleted: true,
      responses: [
        { question: 'Pregunta 1', answer: 'Respuesta 1 de Ramiro' },
        { question: 'Pregunta 2', answer: 'Respuesta 2 de Ramiro' },
      ],
    },
    {
      email: 'client4@example.com',
      name: 'Jorge González',
      formCompleted: true,
      responses: [
        { question: 'Pregunta 1', answer: 'Respuesta 1 de Jorge' },
        { question: 'Pregunta 2', answer: 'Respuesta 2 de Jorge' },
      ],
    },
    {
      email: 'client6@example.com',
      name: 'Luis Rodríguez',
      formCompleted: true,
      responses: [
        { question: 'Pregunta 1', answer: 'Respuesta 1 de Luis' },
        { question: 'Pregunta 2', answer: 'Respuesta 2 de Luis' },
      ],
    },
    {
      email: 'client8@example.com',
      name: 'José Silva',
      formCompleted: true,
      responses: [
        { question: 'Pregunta 1', answer: 'Respuesta 1 de José' },
        { question: 'Pregunta 2', answer: 'Respuesta 2 de José' },
      ],
    },
    {
      email: 'client10@example.com',
      name: 'Ricardo Sánchez',
      formCompleted: true,
      responses: [
        { question: 'Pregunta 1', answer: 'Respuesta 1 de Ricardo' },
        { question: 'Pregunta 2', answer: 'Respuesta 2 de Ricardo' },
      ],
    },
    {
      email: 'client12@example.com',
      name: 'Tomás Vega',
      formCompleted: true,
      responses: [
        { question: 'Pregunta 1', answer: 'Respuesta 1 de Tomás' },
        { question: 'Pregunta 2', answer: 'Respuesta 2 de Tomás' },
      ],
    },
  ];

  constructor() {}

  getUserResponses(email: string): Observable<UserFormResponses | undefined> {
    const userResponses = this.userFormResponses.find(
      (user) => user.email === email
    );
    return of(userResponses);
  }

  getAllUsers(): Observable<UserFormResponses[]> {
    return of(this.userFormResponses);
  }
}
