import { Todo } from '../components/model';
import { Actions } from '../actions/actions';

export const reducer = ( state: Todo[], action: Actions ): Todo[] => {
  switch (action.type) {
    case 'add':
      let newItem: Todo = {
        id: Date.now(),
        todo: action.payload,
        isDone: false
      }
      return [ ...state, newItem ];

    case "complete":
      return state.map( todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo )
  
    default:
      return state;
  }
}