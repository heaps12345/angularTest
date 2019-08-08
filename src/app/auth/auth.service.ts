import { Subject } from 'rxjs/Subject';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

export class AuthService {
  authChange = new Subject<boolean>();

  private user: User;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  registerUser(authData: AuthData) {
    debugger;

    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        
        this.authChange.next(true);
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  login(authData: AuthData) {
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authChange.next(true);
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        console.log(err);
      });
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }
}
