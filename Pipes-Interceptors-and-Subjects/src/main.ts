import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {
  Observable,
  Subject,
  map,
  BehaviorSubject,
  ReplaySubject,
  AsyncSubject,
} from 'rxjs';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

//Promise Demo
// const p = new Promise((resolve) => {
//   resolve(100)
// });

// p.then(console.log)

// const o$ = new Observable<number>(obs => {
//   obs.next(1000);
//   obs.next(2000);
//   obs.next(3000);

//   return () => {
//     //cleanup
//   }
// })

// o$.pipe(map((num: number) => num + 1)).subscribe({
//   next: console.log,
//   error: (err) => console.log(`Error: ${err}`),
//   complete: () => console.log('Obs completed')
// });

// function interval(delay: number, count?: number) {
//   let counter = 0;
//   return new Observable((obs) => {
//     if(counter === count) {
//       obs.complete();
//       return
//     }
//     const i = setInterval(() => {
//       obs.next(counter++);
//     }, delay);

//     return () => {
//       clearInterval(i);
//     };
//   });
// }

// const subscription = interval(1000, 8).subscribe({
//     next: console.log,
//     error: (err) => console.log(`Error: ${err}`),
//     complete: () => console.log('Obs completed')
//   });

//   setTimeout(() => {
//     subscription.unsubscribe();
//   }, 3000)

// SUBJECT

// const subj$$ = new Subject();
// subj$$.subscribe (console.log);
// subj$$.next(123);

// subj$$.subscribe(console.log);
// subj$$.subscribe(console.log);
// subj$$.next(400);

// setTimeout(() => {
//   subj$$.subscribe(console.log);
//     subj$$.next(200);
//   setTimeout(() => {
//     subj$$.subscribe(console.log);
//     subj$$.next(1001);
//   }, 2000)
// }, 2000)

// BEHAVIOR SUBJECT

// const bSub$$ = new BehaviorSubject(100);
// bSub$$.subscribe((data) => console.log('Subscription 1', data));
// setTimeout(() => {
//   bSub$$.next(200);
//   bSub$$.subscribe((data) => console.log('Subscription 2', data));
//     setTimeout(() => {
//       bSub$$.next(300);
//       bSub$$.subscribe((data) => console.log('Subscription 3', data));
//     }, 2000)
//   }, 2000)

// REPLAY SUBJECT
// const rSub$$ = new ReplaySubject(10);
// rSub$$.next(1000);
// rSub$$.subscribe((d) => console.log('Subscribe 1', d));

// for(let i = 1; i <= 30; i++) {
//   rSub$$.next(i);
// }

// console.log('-------------');
// rSub$$.subscribe((d) => console.log('Subscribe 2', d))

// ASYNC SUBJECT

const aSub$$ = new AsyncSubject();
aSub$$.next(1);
aSub$$.next(2);
aSub$$.next(3);
aSub$$.subscribe((d) => console.log('Subscribe 1', d));
aSub$$.next(5);
aSub$$.subscribe((d) => console.log('Subscribe 2', d));
aSub$$.complete();

