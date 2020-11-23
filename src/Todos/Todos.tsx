import React from 'react';
import 'Todos/todo.css';

import Todo from 'Todos/Todo';
import { TodosConnectProps } from 'Todos';

interface TodosState {
  value: string,
}

class Todos extends React.Component<TodosConnectProps, TodosState> {
  
  state: TodosState = {
    value: '',
  };
  
  componentDidMount() {
    this.props.requestTodo();
  }
  
  componentWillMount() {
    //this.props.resetTodos();
  }
  
  addTodo = () => {
    const { value } = this.state;
    this.props.addTodo(value);
  };
  
  removeTodo = (id: number) => () => {
    this.props.removeTodo(id);
  };
  
  changeTodo = (id: number) => (newTodo: string) => {
    this.props.changeTodo(id, newTodo);
  };
  
  changeValue = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ value: e.target.value });
  
  render() {
    const { value } = this.state;
    const { todos, loading } = this.props;
    
    return (
      <div className="todo-container">
        <h1>TODOS</h1>
        <button onClick={this.props.requestTodo}>Load MY todos</button>
        
        <input type="text" value={value} onChange={this.changeValue} />
        <button onClick={this.addTodo}>ADD</button>
        
        <div className="todo-wrapper">
          {loading ?
            <span>loading...</span> :
            todos.map((todo, index) => (
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
