import React, { useReducer, useState } from 'react';
import './styles/App.css';

import InputField from './components/InputField';
import { reducer } from './reducer/reducer';
import { Todo } from './components/model';
import TodoList from './components/TodoList';
import { ACTIONS } from './actions/actions';

const App: React.FC = () => {

  const [ todos, dispatch ] = useReducer(reducer, [] as Todo[]);
  const [ todo, setTodo ] = useState<string>('');

  function handleAdd() {
    dispatch({ type: ACTIONS.ADD_TODO, payload: todo });
    setTodo('');
  }

  return (
    <div className="App">
      <h1 className="hi"> TASKIFY </h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

      <TodoList todos={todos} dispatch={dispatch} />
      
    </div>
  );

}

export default App;




// import React, { useReducer, useState } from 'react';
// import './styles/App.css';

// import { Todo } from './components/model';
// import TodoList from './components/TodoList';
// import InputField from './components/InputField';
// import { reducer } from './reducer/reducer';

// // 29 - 37 - 41 - 44 - 47 - 52 - 55 - 58 - 103

// const App: React.FC = () => {

//   const [ state, dispatch ] = useReducer( reducer, [] as Todo[]);
  
//   const [ todo, setTodo ] = useState <string> ("")
//   const [ todos, setTodos ] = useState <Todo[]> ([])

//   const handleAdd = (e: React.FormEvent) => {
//     e.preventDefault();

//     if ( todo ) {

//       let newItem: Todo = {
//         id: Date.now(),
//         todo,
//         isDone: false
//       }
      
//       setTodos([
//         ...todos,
//         newItem
//       ])

//       setTodo('');

//     }
//   }

//   return (
//     <div className="App">

//       <InputField 
//         todo={todo} 
//         setTodo={setTodo} 
//         handleAdd={handleAdd}
//       />

//       <TodoList todos={todos} setTodos={setTodos} />

//     </div>
//   );

// }

// export default App;
