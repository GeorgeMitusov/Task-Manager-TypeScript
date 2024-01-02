import React, { useRef } from "react";
import "../styles/InputField.scss";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (todo.trim() !== '') {
      handleAdd(e);
    } else {
      alert("Can't be empty.")      
      setTodo('');
    }

    inputRef.current?.blur();
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="input"
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input-field"
      />
      <button className="input-submit" type="submit">
        {" "}
        Go!{" "}
      </button>
    </form>
  );
};

export default InputField;
