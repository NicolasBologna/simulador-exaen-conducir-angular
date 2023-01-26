import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  name: string = '';
  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.authService
      .register(this.name, this.username, this.password)
      .subscribe(
        (response) => {
          this.toastr.success(
            'Por favor, ahora ingresá a tu cuenta',
            'Usuario creado correctamente'
          );
          this.router.navigate(['/login']);
        },
        (error) => {
          this.toastr.error('Error al crear el usuario:', error);
        }
      );
  }
}
