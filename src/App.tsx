import React, { useState } from 'react';
import './styles/App.css';
import { Todo } from './components/model';

import InputField from './components/InputField';

// 29 - 37

const App: React.FC = () => {

  const [ todo, setTodo ] = useState <string> ("")
  const [ todos, setTodos ] = useState <Todo []> ([])

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

      <span className='heading'> Taskify </span>

      <InputField 
        todo={todo} 
        setTodo={setTodo} 
        handleAdd={handleAdd}
      />

    </div>
  );

}

export default App;
