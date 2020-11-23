export enum TodoActionTypes {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
  CHANGE_TODO = 'CHANGE_TODO',
  REQUEST_TODO = 'REQUEST_TODO',
  REQUEST_TODO_SUCCESS = 'REQUEST_TODO_SUCCESS',
  REQUEST_TODO_ERROR = 'REQUEST_TODO_ERROR',
}

export interface RequestTodoAction {
  type: TodoActionTypes.REQUEST_TODO;
}

export const requestTodo = (): RequestTodoAction => ({
  type: TodoActionTypes.REQUEST_TODO,
});

export interface RequestTodoErrorAction {
  type: TodoActionTypes.REQUEST_TODO_ERROR;
}

export const requestTodoError = (): RequestTodoErrorAction => ({
  type: TodoActionTypes.REQUEST_TODO_ERROR,
});

export interface RequestTodoSuccessAction {
  type: TodoActionTypes.REQUEST_TODO_SUCCESS;
  items: string[];
}

export const requestTodoSuccess = (items: string[]): RequestTodoSuccessAction => ({
  type: TodoActionTypes.REQUEST_TODO_SUCCESS,
  items
});

interface AddTodoAction {
  type: TodoActionTypes.ADD_TODO;
  value: string;
}

export const addTodo = (value: string): AddTodoAction => ({
  type: TodoActionTypes.ADD_TODO,
  value
});

interface RemoveTodoAction {
  type: TodoActionTypes.REMOVE_TODO;
  id: number;
}

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: TodoActionTypes.REMOVE_TODO,
  id
});

interface ChangeTodoAction {
  type: TodoActionTypes.CHANGE_TODO;
  value: string;
  id: number;
}

export const changeTodo = (id: number, value: string): ChangeTodoAction => ({
  type: TodoActionTypes.CHANGE_TODO,
  id,
  value
});

export type TodosAction =
  AddTodoAction |
  RemoveTodoAction |
  ChangeTodoAction |
  RequestTodoAction |
  RequestTodoSuccessAction |
  RequestTodoErrorAction;
