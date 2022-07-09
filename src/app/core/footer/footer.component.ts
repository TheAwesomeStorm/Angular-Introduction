import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  user$: Observable<User>

  constructor(private userService: UserService) {
    this.user$ = userService.getUser() as Observable<User>;
  }

  ngOnInit(): void {
  }

}
