import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/Models/User';
import { AccountService } from 'src/app/Services/Account.service';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  isLoggedIn: boolean = false;
  currentUser$: Observable<User> = this.accountService.currentUser$;


  constructor(public accountService: AccountService) { }

  ngOnInit() {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {

    this.accountService.login(this.model);
  }

  logout() {

    this.accountService.logout();
  }

}
