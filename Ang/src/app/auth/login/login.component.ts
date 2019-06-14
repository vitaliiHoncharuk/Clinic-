import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {API_response} from '../../models/API_response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login(form: NgForm) {
    const user = {
      login: form.value.login,
      password: form.value.password,
    };
    this.auth.loginUser(user).subscribe((data: API_response) => {
      if (data.success) {
        localStorage.setItem('token', `${data.msg}`);
      }
      console.log(data.msg);
    });
  }

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

}
