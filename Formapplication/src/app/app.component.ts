import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Formapplication';
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  formObj = {
    email : '',
    password : '',
    city : '',
    state : '',
    pincode : 0
  };

  constructor(private http: HttpClient) {}

  sendData() {
    // console.log(this.formObj);
    this.http.post("localhost:8080/saveData", this.formObj).subscribe((response)=>{
      console.log(response);
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
