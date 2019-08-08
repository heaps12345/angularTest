import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmitSignUp(form) {

    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
