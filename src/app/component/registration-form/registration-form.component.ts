import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  data = {
    registration: {
      "firstName": "bilal",
      "lastName": "ahmed",
      "email": "bilal@gmail.com",
      "fatherName": "aslam",
      "address": "malir town karachi",
      "mobileNumber": "03472498243",
      "homeContactNumber": "03472498243"
    }
  }

  addData(){
 
  }

submitForm() {

  this.registerForm = this.formBuilder.group({
    firstName: ['bilalahmed', Validators.required],
    lastName: ['ziaa', Validators.required],
    email: ['aaa@gmail.com', [Validators.required, Validators.email]],
    fatherName: ['bbc', [Validators.required]],
    address: ['orangi', Validators.required],
    mobileNumber: ['03472498243', Validators.requiredTrue],
    homeContactNumber: ['03472498243', Validators.requiredTrue]
  });

  let headers = new HttpHeaders();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Credentials', 'true');

  this.http.post("http://localhost:3000/api/registration", this.data, {'headers': headers}).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log('err:' + err);
    }
  );
}


}
