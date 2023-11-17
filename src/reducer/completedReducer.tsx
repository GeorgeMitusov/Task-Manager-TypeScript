import { Todo } from '../components/model';
import { Actions } from '../actions/actions';

export const completedReducer = ( state: Todo[], action: Actions ): Todo[] => {
  switch (action.type) {
  
    default:
      return state;
  }
}