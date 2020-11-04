import React from 'react';

interface TodoProps {
  todo: string;
  onRemove(): void;
  onUpdate(value: string): void;
}

interface TodoState {
  editable: boolean;
  value: string;
}

class Todo extends React.Component<TodoProps, TodoState> {
  state: TodoState = {
    editable: false,
    value: this.props.todo,
  };
  
  toggleEditable = (flag: boolean) => () => this.setState(({ editable: flag }));
  
  changeValue = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ value: e.target.value });
  
  saveTodo = () => {
    const { value } = this.state;
    const { onUpdate } = this.props;
    this.toggleEditable(false)();
    onUpdate(value);
  };
  
  render() {
    const { editable, value } = this.state;
    const { todo, onRemove } = this.props;
    return (
      <div>
        <div className="todo-text" onClick={this.toggleEditable(true)}>
          { editable ?
            <input
              type="text"
              value={value}
              onChange={this.changeValue}
              onBlur={this.saveTodo}
            /> :
            todo }
        </div>
        <button className="remove-btn" onClick={onRemove}>Remove</button>
      </div>
    );
  };
}

export default Todo;
