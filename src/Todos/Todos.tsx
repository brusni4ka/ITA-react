import React from 'react';
import 'Todos/todo.css';

import Todo from 'Todos/Todo';

interface TodosState {
  value: string,
  todos: string[],
}

class Todos extends React.Component<{}, TodosState> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ..
  //   }
  // }
  
  state: TodosState = {
    value: '',
    todos: [],
  };
  
  addTodo = () => {
    const {value, todos} = this.state;
    this.setState({
      value: '',
      todos: [
        ...todos,
        value,
      ]
    })
  };
  
  removeTodo = (id: number) => () => {
    const { todos } = this.state;
    const updatedTodo = todos.filter((todo, index) => index !== id);
    this.setState({ todos: updatedTodo });
  };
  
  changeTodo = (id: number) => (newTodo: string) => {
    const { todos } = this.state;
    const updatedTodo = todos.map((todo, index) => index === id ? newTodo : todo);
    this.setState({ todos: updatedTodo });
  };
  
  changeValue = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ value: e.target.value });
  
  render() {
    const { value, todos } = this.state;
    
    return (
      <div className="todo-container">
        <h1>TODOS</h1>
        <input type="text" value={value} onChange={this.changeValue} />
        <button onClick={this.addTodo}>ADD</button>
        
        <div className="todo-wrapper">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              onRemove={this.removeTodo(index)}
              onUpdate={this.changeTodo(index)}
            />
          ))}
        </div>
        
      </div>
    );
  }
}

export  default Todos;
