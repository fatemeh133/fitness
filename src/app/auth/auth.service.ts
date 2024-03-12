import { Injectable } from '@angular/core';
import { AuthData } from './auth.model';
import { User } from './user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: User | null;
  authChange = new Subject<boolean>();

  constructor() {}

  register(auth: AuthData) {
    this.user = {
      email: auth.email,
      userId: Math.round(Math.random() * 100).toString(),
    };
    this.authChange.next(true);
  }
  login(auth: AuthData) {
    this.user = {
      email: auth.email,
      userId: Math.round(Math.random() * 100).toString(),
    };
    this.authChange.next(true);
  }
  logout() {
    this.user = null;
    this.authChange.next(false);
  }
  getUser() {
    return { ...this.user };
  }
  isAuth() {
    return this.user !== null;
  }
}
