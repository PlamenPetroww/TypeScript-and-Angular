import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Lesson } from '../types/lessons';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../user/auth.service';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { UserService } from '../user/user.service';
import { MessageComponent } from '../core/message/message.component';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css'],
})
export class LessonsListComponent implements OnInit, OnDestroy {
  lessonList: Lesson[] = [];
  lessonArray: Lesson[] = [];
  isLoading: boolean = true;
  offerId: any;
  userId: any;
  auth = getAuth();
  lesson: Lesson | undefined;
  showAllLessons = false;
  isAuth = false;
  private userSub?: Subscription;
  noLessons: boolean = false;
  user: User | null = null;
  userEmail: string | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private message: MessageComponent, 
  ) {
    this.userService.currentUser$.subscribe((user) => {
      if (user) {
        this.userId = user.uid;
        // this.userEmail = user.email;
      } else {
        this.userId = null;
        // this.userEmail = null;
      }
    });

  }

  ngOnInit(): void {
    onAuthStateChanged(this.auth, (user) => {
      if(user) {
        const userEmail = user.email;
        console.log(userEmail)
      }
    })
    this.apiService.getLessons().subscribe({
      next: (offers) => {
        this.lessonList = offers;
        this.lessonArray = Object.values(this.lessonList);
        this.offerId = Object.keys(this.lessonList);
        this.isLoading = false;
        if (this.lessonArray.length === 0) {
          this.noLessons = true;
        }
      },
      error: (error) => {
        this.isLoading = true;
        console.log(`Error: ${error}`);
      },
    });

    this.userSub = this.authService.currentUser$.subscribe((user) => {
      this.isAuth = !user ? false : true;
    });

    
  }


  getOfferIdFromApiService(offerId: string) {
    this.apiService.setOfferId(offerId);
  }

  onViewAll(event: Event) {
    event.preventDefault();
    this.showAllLessons = true;
    this.router.navigate(['/lessons']);
  }

  onDeleteHandler(offerId: string): void {
    if (confirm(`Are you sure you want to delete this lesson ?`)) {
      this.apiService.deleteLessonById(offerId).subscribe(() => {
        this.message.showToastrDeleteItem();
        this.router.navigate(['/']);
      });
    } else {
      return;
    }
  }

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
