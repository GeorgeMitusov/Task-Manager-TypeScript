import React from 'react';
import { Todo } from './model';
import { MdDone, MdEdit, MdDelete } from "react-icons/md";

interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todos, todo, setTodos } : Props) => {
  return (
    <form className="todos__single">

      <span className="todos__single--text"> { todo.todo } </span>

      <div>
        <span className="icon"> <MdEdit /> </span>
        <span className="icon"> <MdDelete /> </span>
        <span className="icon"> <MdDone /> </span>
      </div>


    </form>
  )
}

export default SingleTodo;
