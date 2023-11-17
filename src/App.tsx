import React, { useReducer, useState } from 'react';
import './styles/App.css';

import InputField from './components/InputField';
import { reducer } from './reducer/reducer';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import { ACTIONS } from './actions/actions';
import { completedReducer } from './reducer/completedReducer';

const App: React.FC = () => {

  const [ todos, todosDispatch ] = useReducer(reducer, [] as Todo[]);
  const [ completedTodos, completedDispatch ] = useReducer(completedReducer, [] as Todo[]);
  const [ todo, setTodo ] = useState<string>('');

  function handleAdd() {
    todosDispatch({ type: ACTIONS.ADD_TODO, payload: todo });
    setTodo('');
  }

  return (
    <div className="App">
      <h1 className="app-title"> TASK MANAGER </h1>

      <div className="app-container">

        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <TodoList todos={todos} todosDispatch={todosDispatch} />

      </div>
      
    </div>
  );

}

export default App;

// import React, { useReducer, useState } from 'react';
// import './styles/App.css';

// import InputField from './components/InputField';
// import { reducer } from './reducer/reducer';
// import { Todo } from './components/model';
// import TodoList from './components/TodoList';
// import { ACTIONS } from './actions/actions';
// import { completedReducer } from './reducer/completedReducer';

// const App: React.FC = () => {

//   const [ todos, dispatch ] = useReducer(reducer, [] as Todo[]);
//   const [ completedTodos, dispatch ] = useReducer(completedReducer, [] as Todo[]);
//   const [ todo, setTodo ] = useState<string>('');

//   function handleAdd() {
//     dispatch({ type: ACTIONS.ADD_TODO, payload: todo });
//     setTodo('');
//   }

//   return (
//     <div className="App">
//       <h1 className="app-title"> TASK MANAGER </h1>

//       <div className="app-container">

//         <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

//         <TodoList todos={todos} dispatch={dispatch} />

//       </div>
      
//     </div>
//   );

// }

// export default App;