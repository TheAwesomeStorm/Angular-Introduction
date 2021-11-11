import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder,) {
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    })
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
