import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux-simulation',
  templateUrl: './redux-simulation.component.html',
  styleUrls: ['./redux-simulation.component.css']
})
export class ReduxSimulationComponent implements OnInit {
  ngOnInit(): void {
    this.demoTest();
  }

  demoTest() {
    //Redux => Design Pattern

    //type
    interface AppState {
      str: string;
      obj: any;
      bool: boolean;
    }

    //Default state
    const initialState: AppState = {
      str: '',
      obj: null,
      bool: false,
    };

    //Actions
    const EVENT_ONE = 'EVENT_1'
    const EVENT_TWO = 'EVENT_2'
    const EVENT_THREE = 'EVENT_3'



    //reducer
    function reducer(state: AppState, action: any) {
      switch (action.type) {
        case EVENT_ONE:
        return {...state, str: action.value};
        
        case EVENT_TWO:
        return {...state, obj: action.value};

        case EVENT_THREE:
        return {...state, bool: action.value};

        default:
          return state;
      }
    }

    //combine events with reducer and initial state
    const eventCollection = [
      { type: EVENT_ONE, value: 'test123' },  //action
      { type: EVENT_TWO, value: { name: 'Pesho', age: 21 } },  //action 
      {type: EVENT_THREE, value: true}  //action
    ];
    
    //simulate dispatching action
    const result = eventCollection.reduce(reducer, initialState);
  }
}
