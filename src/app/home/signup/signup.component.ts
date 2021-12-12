import { NewUser } from './new-user'
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { UserNotTakenValidatorService } from './user-not-taken.validator.service'
import { SignupService } from './signup.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private signUpService: SignupService,
    private userNotTakenValidatorService: UserNotTakenValidatorService
  ) {
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
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
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

  public signUp() {
    const newUser: NewUser = this.signupForm.getRawValue()
    this.signUpService
      .signUp(newUser)
      .subscribe(
        () => this.router.navigate([''])
      )
  }

}
