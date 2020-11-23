// use them in parallel
import { all } from 'redux-saga/effects';
import { todosSagas } from 'Todos/todosSagas';

export default function* rootSaga() {
  yield all([
    todosSagas()
  ])
}