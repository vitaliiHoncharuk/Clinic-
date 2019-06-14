import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  sendForm(form: NgForm) {
    const user = {
      login : form.value.login,
      name : form.value.name,
      password : form.value.password,
      email : form.value.email,
      surname : form.value.surname,
    };
    console.log(user);
    this.auth.registerUser(user).subscribe(data => {
      console.log(data);
    });
  }
}
