import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 register = false;
  login = false;

  showLoginClick() {
    this.register = false;
    this.login ? this.login = false : this.login = true;
  }

  showRegisterClick() {
    this.login = false;
    this.register ? this.register = false : this.register = true;
  }

}
