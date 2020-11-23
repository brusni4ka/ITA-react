import { TodoActionTypes, TodosAction } from 'Todos/todosActions';

export interface TodosState {
  items: string[];
  loading: boolean;
}

const todosDefaultState: TodosState = {
  items: [],
  loading: false,
};

export const todosReducer = (state = todosDefaultState, action: TodosAction) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      return {
        ...state,
        items: [
          ...state.items,
          action.value
        ]
      }
    }
    case TodoActionTypes.REMOVE_TODO: {
      const updatedTodo = state.items.filter((todo, index) => index !== action.id);
      return {
        ...state,
        items: updatedTodo
      }
    }
    case TodoActionTypes.CHANGE_TODO: {
      const updatedTodo = state.items.map((todo, index) => index === action.id ? action.value : todo);
      return {
        ...state,
        items: updatedTodo
      }
    }
    case TodoActionTypes.REQUEST_TODO: {
      return {
        ...state,
        loading: true,
      }
    }
    case TodoActionTypes.REQUEST_TODO_SUCCESS: {
      return {
        ...state,
        items: action.items,
        loading: false,
      }
    }
    case TodoActionTypes.REQUEST_TODO_ERROR: {
      return {
        ...state,
        loading: false,
      }
    }
  
    // case TodoActionTypes.RESET_TODOS: {
    //   return {
    //     state: todosDefaultState
    //   }
    // }
    
    default: return state;
  }
  
};