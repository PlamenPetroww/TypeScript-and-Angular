import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Lesson } from 'src/app/types/lessons';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../types/user';
import { MessageComponent } from 'src/app/core/message/message.component';

@Component({
  selector: 'app-load-offer',
  templateUrl: './load-offer.component.html',
  styleUrls: ['./load-offer.component.css'],
})
export class LoadOfferComponent implements OnInit {
  userId: any;
  userEmail: any;
  user: User | null = null;
  buttonText: string = 'Subscribe';
  isSubscribed: boolean = false;

  private isLoggedSubject = new BehaviorSubject<boolean>(false);
  isLogged$ = this.isLoggedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private auth: AngularFireAuth,
    private message: MessageComponent
  ) {
    this.auth.authState.subscribe((user) => {
      this.isLoggedSubject.next(true);
      if (user) {
        this.isLoggedSubject.next(true);
        this.userId = user.uid;
        this.userEmail = user.email;
        console.log(this.userId);
        console.log(this.userEmail);

      } else {
        this.isLoggedSubject.next(false);
        this.userId = null;
        this.userEmail = null;
      }
    });
  }

  lesson: Lesson | undefined;

  ngOnInit(): void {
    this.showFullInfoLesson();
  }

  showFullInfoLesson(): void {
    const lessonId = this.activatedRoute.snapshot.params['lessonId'];
    this.apiService.getLesson(lessonId).subscribe((lesson) => {
      this.lesson = lesson;
    });
  }

  toggleSubscription() {
    if (!this.isSubscribed) {
      this.buttonText = 'Subscribed';
      this.message.showToastrAfterSubscribe();
      this.isSubscribed = true;
    }
  }

}
