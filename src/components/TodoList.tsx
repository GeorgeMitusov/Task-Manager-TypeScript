import React from 'react';
import { Todo } from './model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[],
  todosDispatch: React.Dispatch<any>
}

const TodoList: React.FC<Props> = ({ todos, todosDispatch }) => {

  return (
    <div className='container'>
      <div className="todos">
        <h6 className="todos__heading"> Active tasks</h6>
        { todos.map( todo => <SingleTodo key={todo.id} todo={todo} todosDispatch={todosDispatch} /> )}
      </div>
      <div className="todos remove">
        <h6 className="todos__heading"> Completed tasks</h6>
        { todos.map( todo => <SingleTodo key={todo.id} todo={todo} todosDispatch={todosDispatch} /> )}
      </div>
    </div>
  )
}

export default TodoList;

// import React from 'react';
// import { Todo } from './model';
// import SingleTodo from './SingleTodo';

// interface Props {
//   todos: Todo[],
//   dispatch: React.Dispatch<any>
// }

// const TodoList: React.FC<Props> = ({ todos, dispatch }) => {
//   return (
//     <div className='todos'>
//       { todos.map( todo => (
//           <SingleTodo 
//             key={todo.id} 
//             todo={todo} 
//             dispatch={dispatch} 
//           />
//         ) 
//       )}
//     </div>
//   )
// }

// export default TodoList;