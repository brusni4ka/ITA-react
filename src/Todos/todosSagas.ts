import { RequestTodoAction, requestTodoError, requestTodoSuccess, TodoActionTypes } from 'Todos/todosActions';
import { takeLatest, call, put, all, select } from 'redux-saga/effects';

const fetchTodo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['hi', 'my todo', 'todoooo']);
    }, 1000);
  })
};

function* requestTodoSaga(action: RequestTodoAction) {
  try {
    // const todoFromStore = yield select((store) => store.todos.items);
    const todos = yield call(fetchTodo);
    yield put(requestTodoSuccess(todos));
  } catch (e) {
    yield put(requestTodoError());
  }
}

const fetchTodosSub = () => {
  return takeLatest(TodoActionTypes.REQUEST_TODO, requestTodoSaga);
};

export function * todosSagas() {
  return yield all([
    fetchTodosSub(),
    //other subscriptions
  ]);
}
