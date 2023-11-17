import { Todo } from '../components/model';
import { Actions } from '../actions/actions';
import { ACTIONS } from '../actions/actions';


export const reducer = ( state: Todo[], action: Actions ): Todo[] => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      let newItem: Todo = {
        id: Date.now(),
        todo: action.payload,
        isDone: false
      }
      return [ ...state, newItem ];

    case ACTIONS.COMPLETE_TODO:
      return state.map( todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo )

    case ACTIONS.REMOVE_TODO:
      return state.filter( todo => todo.id !== action.payload )

    case ACTIONS.EDIT_TODO:
      return state.map( todo => todo.id === action.payload.id ? { ...todo, todo: action.payload.value } : todo )
  
    default:
      return state;
  }
}