import { NewUser } from './new-user'
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator'
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { UserNotTakenValidatorService } from './user-not-taken.validator.service'
import { SignupService } from './signup.service'
import { Router } from '@angular/router'
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service'
import { SafePasswordValidator } from './safe-password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ UserNotTakenValidatorService ]
})
export class SignupComponent implements OnInit, AfterViewInit {

  public signupForm: FormGroup
  @ViewChild('emailInput', {static: false}) emailInput: ElementRef<HTMLInputElement> | undefined

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private signUpService: SignupService,
    private platformDetectorService: PlatformDetectorService,
    private userNotTakenValidatorService: UserNotTakenValidatorService
  ) {
    this.signupForm = new FormGroup({
      email: new FormControl(''),
      userName: new FormControl(''),
      fullName: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngAfterViewInit () {
    this.platformDetectorService.isPlatformBrowser() && this.emailInput?.nativeElement.focus()
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
    },
      {
        validator: SafePasswordValidator
      })
  }

  public ValidateCustomError(errorName: string): boolean {

    const errors = this.signupForm.errors;

    if (errors) {
      return !!errors[errorName];
    }

    return false;
  }

  public Validate(name: string, errorName: string): boolean {
    const hasError = this.signupForm.get(name)?.hasError(errorName)
    if (hasError) {return hasError} else {return false}
  }

  public signUp() {
    if (this.signupForm.invalid || this.signupForm.pending) {
      return;
    }
    const newUser: NewUser = this.signupForm.getRawValue()
    this.signUpService
      .signUp(newUser)
      .subscribe(
        {
          next : () => this.router.navigate(['']),
          error: (error) => console.log(error)
        }
      )
  }

}
