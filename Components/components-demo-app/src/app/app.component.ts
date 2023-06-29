import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from './types/User';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //  providers: [UserService],
})
export class AppComponent {
  title = 'Title from App Component!';
  appUsers: User[] = [];

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

    setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
      this.userService.addUser(inputName, inputAge);
    }

}

/* const o = new Observable((observer) => {
  // observer.next(1000);
  // observer.next(2000);
  // observer.next(3000);
})

o.subscribe((data) => {
  console.log('data from observer', data);
}) */

function interval(intervalValue: number) {
  return new Observable<number>((observer) => {
    let counter = 0;
    const timer = setInterval(() => {
      observer.next(counter++);
    }, intervalValue);

    return () => {
      clearInterval(timer);
    };
  });
}

const stream$ = interval(3000).pipe(map((x) => x * 2));

setTimeout(() => {
  stream$.subscribe({
    next: (x) => console.log('data', x),
    error: (err) => console.error(`Error occured: ${err}`),
    complete: () => console.log('Stream has been completed!'),
  });
})


