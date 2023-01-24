import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password)
      .subscribe(
        (res: any) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/questions']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
