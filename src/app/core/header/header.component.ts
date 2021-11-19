import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service'
import { Observable } from 'rxjs'
import { User } from '../user/user'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>
  user: User | undefined

  constructor(private userService: UserService) {
    console.log('t3este')
    this.user$ = userService.getUser()
    this.user$.subscribe(user => this.user = user)
  }

  ngOnInit(): void {
  }

}
