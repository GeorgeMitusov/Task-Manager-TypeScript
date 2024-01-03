import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import { AnimatePresence, motion } from "framer-motion";
import Search from "./Search";
import "../styles/TodoList.scss";


interface Props {
  todos: Todo[];
  todosDispatch: React.Dispatch<any>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  todosDispatch,
  searchValue,
  setSearchValue,
  isSearching,
  setIsSearching,
}) => {
  const searchFilter = todos.filter((item) =>
    item.todo.toLowerCase().includes(searchValue.toLowerCase())
  );

  const arrCheck = searchFilter.length === 0 ? todos : searchFilter;

  const todo = arrCheck.map((todo) => (
    <SingleTodo key={todo.id} todo={todo} todosDispatch={todosDispatch} />
  ));

  return (
    <div className="todos">
      <motion.div
        className="todos-container"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 1, delay: 1 }}
      >

        <h6 className="todos-title"> Active tasks</h6>

        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />

        {todos.length === 0 && (
          <h1 className="title-empty"> Your list is empty. </h1>
        )}

        
        <AnimatePresence>
          {todo}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TodoList;
