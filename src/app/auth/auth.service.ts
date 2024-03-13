import { Injectable } from '@angular/core';
import { AuthData } from './auth.model';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: User | null;
  authChange = new Subject<boolean>();

  constructor(private router: Router) {}

  register(auth: AuthData) {
    this.user = {
      email: auth.email,
      userId: Math.round(Math.random() * 100).toString(),
    };
    this.authAndRouting(true, '/training');
  }

  login(auth: AuthData) {
    this.user = {
      email: auth.email,
      userId: Math.round(Math.random() * 100).toString(),
    };
    this.authAndRouting(true, '/training');
  }

  logout() {
    this.user = null;
    this.authAndRouting(false, '/login');
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    console.log(
      'user is full? and should it go to train?',
      this.user !== undefined
    );
    console.log('user:', this.user);

    return this.user !== undefined;
  }
  authAndRouting(isAuth: boolean, routlink: string) {
    this.authChange.next(isAuth);
    this.router.navigate([routlink]);
  }
}
