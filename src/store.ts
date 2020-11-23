import { combineReducers, createStore } from 'redux';
import { todosReducer, TodosState } from 'Todos/todosReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export interface RootState {
  todos: TodosState;
}

const composeEnhancers = composeWithDevTools({ trace: true });

export default createStore(rootReducer, composeEnhancers());
