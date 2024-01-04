import React, { useReducer, useState, useEffect } from "react";
import "./styles/App.scss";

import InputField from "./components/InputField";
import { reducer } from "./reducer/reducer";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
import { ACTIONS } from "./actions/actions";

const STORAGE_KEY = 'tasks';

const App: React.FC = () => {
  const [todos, todosDispatch] = useReducer(reducer, loadTodosFromLocalStorage());
  const [todo, setTodo] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  function loadTodosFromLocalStorage(): Todo[] {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    return storedTodos ? JSON.parse(storedTodos) : [];
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAdd() {
    todosDispatch({ type: ACTIONS.ADD_TODO, payload: todo });
    setTodo("");
  }

  return (
    <div className="App">
      <h1 className="app-title"> TASK MANAGER </h1>

      <div className="app-container">
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

        <TodoList
          todos={todos}
          todosDispatch={todosDispatch}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
      </div>
    </div>
  );
};

export default App;





// import React, { useReducer, useState } from "react";
// import "./styles/App.scss";

// import InputField from "./components/InputField";
// import { reducer } from "./reducer/reducer";
// import { Todo } from "./components/model";
// import TodoList from "./components/TodoList";
// import { ACTIONS } from "./actions/actions";

// const App: React.FC = () => {
//   const [todos, todosDispatch] = useReducer(reducer, [] as Todo[]);
//   const [todo, setTodo] = useState<string>("");
//   const [searchValue, setSearchValue] = useState<string>("");
//   const [isSearching, setIsSearching] = useState<boolean>(false);

//   function handleAdd() {
//     todosDispatch({ type: ACTIONS.ADD_TODO, payload: todo });
//     setTodo("");
//   }

//   return (
//     <div className="App">
//       <h1 className="app-title"> TASK MANAGER </h1>

//       <div className="app-container">
//         <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

//         <TodoList
//           todos={todos}
//           todosDispatch={todosDispatch}
//           setSearchValue={setSearchValue}
//           searchValue={searchValue}
//           isSearching={isSearching}
//           setIsSearching={setIsSearching}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;
