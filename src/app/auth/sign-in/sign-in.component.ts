import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmitSignIn(form) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
