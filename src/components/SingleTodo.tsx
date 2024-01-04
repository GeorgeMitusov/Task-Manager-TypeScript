import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import { MdDone, MdEdit, MdDelete, MdDoneAll } from "react-icons/md";
import { ACTIONS } from "../actions/actions";
import { motion } from "framer-motion";

import "../styles/SingleTodo.scss";

interface Props {
  todo: Todo;
  todosDispatch: React.Dispatch<any>;
}

const SingleTodo = ({ todo, todosDispatch }: Props) => {
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [editValue, setEditValue] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  const todoRef = useRef<HTMLSpanElement>(null);

  function handleDone(id: number) {
    todosDispatch({ type: ACTIONS.COMPLETE_TODO, payload: id });
  }

  function handleRemove(id: number) {
    todosDispatch({ type: ACTIONS.REMOVE_TODO, payload: id });
  }

  function handleEditing() {
    if (!isEdit && !todo.isDone) {
      setIsEdit(!isEdit);
    }
  }

  function handleEnterPress(
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number
  ) {
    if (e.key === "Enter") {
      setIsEdit(false);

      todosDispatch({
        type: ACTIONS.EDIT_TODO,
        payload: { value: editValue, id },
      });
    }
  }

  function handleEditOff() {
    setIsEdit(false);
    setEditValue(todo.todo);
  }

  function handleMouseEnter() {
    if (todoRef.current) {
      const element = todoRef.current;
      if (!todo.isDone) {
        element.style.color = "lightgray";
      } else {
        element.style.color = "darkslategray";
      }
    }
  }

  function handleMouseLeave() {
    if (todoRef.current) {
      const element = todoRef.current;
      if (!todo.isDone) {
        element.style.color = "white";
      } else {
        element.style.color = "gray";
      }
    }
  }

  const todoTitle = (
    <span
      ref={todoRef}
      className="todo-title"
      style={{
        textDecoration: todo.isDone ? "line-through" : "none",
        color: todo.isDone ? "gray" : "white",
        transition: "all 0.3s ease-in",
      }}
      onClick={() => handleDone(todo.id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {todo.todo}
    </span>
  );

  const todoInput = (
    <input
      type="text"
      value={editValue}
      ref={inputRef}
      onChange={(e) => setEditValue(e.target.value)}
      onKeyDown={(e) => handleEnterPress(e, todo.id)}
      className="todo-form-input"
    />
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  return (
    <motion.form
      className="todo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: .5, delay: .2 }}
    >
      {isEdit ? todoInput : todoTitle}

      <div className="todo-panel">
        {isEdit ? (
          <span className="todo-panel-icon edit" onClick={handleEditOff}>
            {" "}
            <MdDoneAll />{" "}
          </span>
        ) : (
          <span className="todo-panel-icon edit" onClick={handleEditing}>
            {" "}
            <MdEdit />{" "}
          </span>
        )}

        <span
          className="todo-panel-icon delete"
          onClick={() => handleRemove(todo.id)}
        >
          {" "}
          <MdDelete />{" "}
        </span>
        <span
          className="todo-panel-icon done"
          onClick={() => handleDone(todo.id)}
        >
          {" "}
          <MdDone />{" "}
        </span>
      </div>
    </motion.form>
  );
};

export default SingleTodo;
