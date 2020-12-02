import React, { useEffect, useState } from 'react';
import 'Todos/todo.css';

import Todo from 'Todos/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addTodo, changeTodo, removeTodo, requestTodo } from 'Todos/todosActions';

// Custom hooks
export const useValue = (defaultValue: string): [string, (value: string) => void] => {
  const [value, setValue] = useState(defaultValue);
  
  useEffect(() => {
    console.log('value changed', value);
  }, [value]);
  
  return [value, setValue];
};

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todos.items);
  const loading = useSelector((state: RootState) => state.todos.loading);
  const dispatch = useDispatch();
  
  
  const [value, setValue] = useValue('');
  const [active, setActive] = useState(false);
  
  // componentDidMount() {
  //   requestTodo();
  // }
  //
  // componentWillMount() {
  //   //resetTodos();
  // }
  
  useEffect(() => {
    console.log('Mounted');
    dispatch(requestTodo());
    return () => {
      //resetTodos()
      console.log('Unmounted');
    }
  }, []);
 
  
  useEffect(() => {
    console.log('Updated checked', active);
    return () => {
      console.log('Updated is going to change');
    }
  }, [active]);
  
  
  const addTodoHandler = () => {
    dispatch(addTodo(value));
  };
  
  const removeTodoHandler = (id: number) => () => {
    dispatch(removeTodo(id));
  };
  
  const changeTodoHandler = (id: number) => (newTodo: string) => {
    dispatch(changeTodo(id, newTodo));
  };
  
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  
  return (
    <div className="todo-container">
      <h1>TODOS</h1>
      load todos
      <input type="checkbox" checked={active} onChange={() => setActive(!active)}/>
      <button onClick={requestTodo}>Load MY todos</button>
      
      <input type="text" value={value} onChange={changeValue} />
      <button onClick={addTodoHandler}>ADD</button>
      
      <div className="todo-wrapper">
        {loading ?
          <span>loading...</span> :
          todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              onRemove={removeTodoHandler(index)}
              onUpdate={changeTodoHandler(index)}
            />
        ))}
      </div>
      
    </div>
  );
};

export  default Todos;
