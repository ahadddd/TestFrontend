import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TestFrontend';
  users: any = [];

  constructor(private http: HttpClient ){}

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers() {
    this.users = this.http.get<any>("https://localhost:7262/User").subscribe({
      next: (data) => this.users = data,
      error: (err) => console.log(err),
      complete: () => console.log(this.users)
    });
  }


}
