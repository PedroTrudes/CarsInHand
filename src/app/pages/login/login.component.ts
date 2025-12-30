import { Component } from '@angular/core';
import { LoginLayoutComponent } from '../../components/login-layout/login-layout.component';
import { CardCarComponent } from '../../components/card-car/card-car.component';

@Component({
  selector: 'app-login',
  imports: [LoginLayoutComponent, CardCarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
