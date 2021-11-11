import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../core/auth/auth.service'
import { Router } from '@angular/router'
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup
  @ViewChild('userNameInput', {static: false}) userNameInput: ElementRef<HTMLInputElement> | undefined

  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
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

  login() {
    const userName = this.loginForm.get('userName')?.value as string
    const password = this.loginForm.get('password')?.value as string

    this.authentication
      .authenticate(userName, password)
      .subscribe(
        {
          next: () => this.router.navigate(['user', userName]),
          error: (error) => {
            console.log(error)
            this.loginForm.reset()
            if(this.platformDetectorService) this.userNameInput?.nativeElement.focus()
          }
        }
      )
  }
}

//constructor => + private render: Renderer2
//this.userNameInput?.nativeElement.focus => this.render.selectRootElement('#idName').focus()
//add id='idName' to HTML tag
