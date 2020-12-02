import React, { useCallback, useState } from 'react';
import { useValue } from 'Todos/Todos';

interface TodoProps {
  todo: string;
  onRemove(): void;
  onUpdate(value: string): void;
}

const Todo = (props: TodoProps) => {
  const [value, setValue] = useValue(props.todo);
  const [editable, setEditable] = useState(false);
  
  const toggleEditable = (flag: boolean) => () => setEditable(flag);
  
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  
  const saveTodo = () => {
    const { onUpdate } = props;
    toggleEditable(false)();
    onUpdate(value);
  };
  
  const { todo, onRemove } = props;
  return (
    <div>
      <div className="todo-text" onClick={toggleEditable(true)}>
        { editable ?
          <input
            type="text"
            value={value}
            onChange={changeValue}
            onBlur={saveTodo}
          /> :
          todo }
      </div>
      <button className="remove-btn" onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Todo;
