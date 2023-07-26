import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.demoTest();
  }

  

  demoTest() {
    function reducer(acc:number, curr: number) {
      return acc + curr;
    }
    //Redux => Design Pattern
    const sum = [1, 2, 3].reduce(reducer, 0)
    console.log(sum)
  }
}
