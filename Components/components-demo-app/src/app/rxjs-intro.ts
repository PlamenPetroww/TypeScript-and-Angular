import { Observable, map } from 'rxjs';


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