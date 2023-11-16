import React, { useRef } from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
// const InputField = ({ todo, setTodo } : Props )  => {
// const InputField: React.FC<Props> = ({ todo, setTodo })  => {

const InputField = ({ todo, setTodo, handleAdd } : Props )  => {

  const inputRef = useRef <HTMLInputElement> (null);

  const handleSubmit = ( e: React.FormEvent ) => {
    handleAdd(e);

    inputRef.current?.blur();
  }

  return (
    <form 
      className='input'
      onSubmit={handleSubmit}
    >
      <input 
        type='input'
        ref={inputRef}
        value={todo} 
        onChange={ e => setTodo(e.target.value) }
        placeholder='Enter a task'
        className='input__box'
      />
      <button
        className='input_submit'
        type='submit'
      > Go! </button>
    </form>
  )
}

export default InputField;
