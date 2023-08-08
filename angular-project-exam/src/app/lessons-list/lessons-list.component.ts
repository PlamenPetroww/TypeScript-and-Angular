import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Lesson } from '../types/lessons';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../user/auth.service';
import { User } from 'firebase/auth';
import { UserService } from '../user/user.service';

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
  lessonId: any;
  userId: any;
  isOwner: any;
  userEmail: any;
  lesson: Lesson | undefined;
  showAllLessons = false;
  isAuth = false;
  private userSub?: Subscription;
  noLessons: boolean = false;
  user: User | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.userService.currentUser$.subscribe((user) => {
      if (user) {
        this.userId = user.uid;
        this.userEmail = user.email;
      } else {
        this.userId = null;
        this.userEmail = null;
      }
    });

  }

  ngOnInit(): void {
    this.apiService.getLessons().subscribe({
      next: (offers) => {
        this.lessonList = offers;
        console.log(this.lessonList)
        console.log(offers)
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

    this.isOwner = this.userEmail === this.lessonArray[0].userEmail
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
