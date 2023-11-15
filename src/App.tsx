import React, { useState } from 'react';
import './styles/App.css';

import InputField from './components/InputField';

// 29

const App: React.FC = () => {

  const [ todo, setTodo ] = useState <string> ("")

  // UNION
  // const [ todo, setTodo ] = useState <string | number> ("")

  return (
    <div className="App">

      <span className='heading'> Taskify </span>

      <InputField todo={todo} setTodo={setTodo} />

    </div>
  );

}

export default App;
