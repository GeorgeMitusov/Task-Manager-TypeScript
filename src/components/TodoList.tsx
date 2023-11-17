import React from 'react';
import { Todo } from './model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[],
  dispatch: React.Dispatch<any>
}

const TodoList: React.FC<Props> = ({ todos, dispatch }) => {
  return (
    <div className='todos'>
      { todos.map( todo => (
          <SingleTodo 
            key={todo.id} 
            todo={todo} 
            dispatch={dispatch} 
          />
        ) 
      )}
    </div>
  )
}

export default TodoList;