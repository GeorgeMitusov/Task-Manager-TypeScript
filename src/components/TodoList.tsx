import React from 'react';
import { Todo } from './model';
import SingleTodo from './SingleTodo';
import "../styles/TodoList.scss";
import { motion } from 'framer-motion';

interface Props {
  todos: Todo[],
  todosDispatch: React.Dispatch<any>
}

const TodoList: React.FC<Props> = ({ todos, todosDispatch }) => {

  const todo = todos.map( todo => <SingleTodo key={todo.id} todo={todo} todosDispatch={todosDispatch} /> );

  return (
    <div className="todos">
      <motion.div 
        className="todos-container"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "linear", duration: 1, delay: 1 }}
      >
        <h6 className="todos-title"> Active tasks</h6>
        { todos.length > 0 ? todo : <h1 className='title-empty'> Your list is empty. </h1> }
      </motion.div>
    </div>
  )
}

export default TodoList;
