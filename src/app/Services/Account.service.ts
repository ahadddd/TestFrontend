import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { User } from '../Models/User';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = `https://localhost:7262/`;
  private currentUserSource = new ReplaySubject<any>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model: any) {
    this.http.post<User>(this.baseUrl + 'Account/login', model).subscribe({
      next: (res) => {
        let user = res;
        console.log(user);
        if (user != null) {
          localStorage.setItem('user', JSON.stringify(user));
          this.setCurrentUser(user);
        }
      },
      error: (err) => console.log(err),
      complete: () => console.log('Completed')
    });
  }

  register(model: any) {
    this.http.post<User>(this.baseUrl + `Account/register`, model).subscribe({
      next: (res) => {
        let user = res;
        console.log(res);
        localStorage.setItem('user', JSON.stringify(user));
        this.setCurrentUser(user);
      },
      error: (err) => console.log(err),
      complete: () => console.log(`Sign up complete. ${model.username} added to system!`)
    });
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

}
