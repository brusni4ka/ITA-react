import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'store';

import Todos from 'Todos/Todos';
import { addTodo, changeTodo, removeTodo, requestTodo } from 'Todos/todosActions';

const mapStateToProps = (state: RootState) => {
  return {
    todos: state.todos.items,
    loading: state.todos.loading,
  }
};

const mapDispatchToProps = {
  addTodo,
  removeTodo,
  changeTodo,
  requestTodo
};


const connector = connect(mapStateToProps,mapDispatchToProps);
export type TodosConnectProps = ConnectedProps<typeof connector>;

export default connector(Todos);
