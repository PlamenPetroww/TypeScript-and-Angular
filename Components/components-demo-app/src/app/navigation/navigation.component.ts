import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Input('title') titleFromApp: string="";
  @Input('activeUsers') activeUsers: {name: string, age: number}[] = [];
  isActive = false;
  inputValue = 'Hello';


  handleClick() {
    this.isActive = !this.isActive;

  }

}
