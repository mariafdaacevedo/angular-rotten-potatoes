import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '12345';
  password: string = '12345';
  errorMsg = '';

  constructor(
    private auth: AuthService,
    private router: Router
    )
    {}

  ngOnInit(): void {
  }

  login(){
    if (this.username.trim().length === 0){
      this.errorMsg = "Username is required"
    }else if (this.password.trim().length === 0){
      this.errorMsg = "Password is required";
    }else{
      this.errorMsg ="";
      let res = this.auth.login(this.username, this.password);
      if (res === 200){
        this.router.navigate(['home'])
      }
      if (res === 403){
        this.errorMsg = 'Invalid credentials'
      }
    }
  }

}
