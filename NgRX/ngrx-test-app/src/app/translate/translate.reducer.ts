import { Action } from '@ngrx/store';

export function translateReducer(state: string = 'Hello!', action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case 'DEUTSCH':
      return state = 'Hallo!';
    case 'ITALIAN':
      return state = 'Hallo auf Italianisch!';

    default:
      break;
  }
}
