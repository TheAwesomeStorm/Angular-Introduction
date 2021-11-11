import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../core/auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthService
  ) {
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

  Validate(name: string): boolean {
    const nameHasError = this.loginForm.get(name)?.hasError('required')
    if (nameHasError) { return nameHasError} else { return false }
  }

}
