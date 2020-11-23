import { combineReducers, createStore, applyMiddleware } from 'redux';
import { todosReducer, TodosState } from 'Todos/todosReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'rootSaga';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export interface RootState {
  todos: TodosState;
}

const composeEnhancers = composeWithDevTools({ trace: true });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;

