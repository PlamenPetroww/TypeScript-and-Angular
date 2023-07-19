import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable, map } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

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
// })
