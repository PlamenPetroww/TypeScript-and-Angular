import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  email: any;
  isAuth = false;
  private userSub?: Subscription;

  constructor(private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    this.userSub = this.authService.currentUser$.subscribe(user => {
      this.isAuth = !user ? false : true;
      this.email = user?.email;
    })
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  };

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
