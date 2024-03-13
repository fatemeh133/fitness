import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    console.log(form);

    this.authService.register({
      email: form.value.email,
      password: form.value.password,
    });
  }
}
