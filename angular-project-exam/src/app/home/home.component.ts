import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  email: any;
  isAuth = false;
  private userSub?: Subscription;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.userSub = this.authService.currentUser$.subscribe(user => {
      this.isAuth = !user ? false : true;
      this.email = user?.email;
    })
  }
  
}
