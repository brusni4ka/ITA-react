import { TodoActionTypes, TodosAction } from 'Todos/todosActions';

export interface TodosState {
  items: string[];
}

const todosDefaultState: TodosState = {
  items: []
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
    default: return state;
  }
  
};