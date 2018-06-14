import { Injectable } from '@angular/core';
// Импортим интерфейсы наших данных
import { UserData } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUserData(): UserData {
    return {
      id: 0,
      firstName: "John",
      lastName: "Smith"
    }
  }
}
