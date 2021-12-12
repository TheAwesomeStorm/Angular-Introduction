import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = new FormGroup({
      email: new FormControl(''),
      userName: new FormControl(''),
      fullName: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]],
      userName: ['',
        [
          Validators.required,
          Validators.pattern(/^[a-z]+[0-9]*$/),
          Validators.minLength(2),
          Validators.maxLength(30)
        ]],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]],
      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]]
    })
  }

  public Validate(name: string, errorName: string): boolean {
    const hasError = this.signupForm.get(name)?.hasError(errorName)
    if (hasError) {return hasError} else {return false}
  }

}
