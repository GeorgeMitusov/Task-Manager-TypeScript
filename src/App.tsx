import React, { useState } from 'react';
import './styles/App.css';

import { Todo } from './components/model';
import TodoList from './components/TodoList';
import InputField from './components/InputField';

// 29 - 37 - 41 - 44 

const App: React.FC = () => {

  const [ todo, setTodo ] = useState <string> ("")
  const [ todos, setTodos ] = useState <Todo[]> ([])

  // UNION
  // const [ todo, setTodo ] = useState <string | number> ("")

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if ( todo ) {

      let newItem: Todo = {
        id: Date.now(),
        todo,
        isDone: false
      }
      
      setTodos([
        ...todos,
        newItem
      ])

      setTodo('');

    }
  }

  return (
    <div className="App">

      <InputField 
        todo={todo} 
        setTodo={setTodo} 
        handleAdd={handleAdd}
      />

      <TodoList todos={todos} setTodos={setTodos} />

    </div>
  );

}

export default App;
