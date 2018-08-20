export default function todo(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false,
          removed: false
        }
      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }
        return {
          ...state,
          completed: !state.completed
        }
        // this is to delete a todo but for sure something is wrong and is not working
        // im calling this from components/todo.js
      case 'REMOVE_TODO':
        return state.slice(todo, 1)
      default:
        return state;
    }
  }

  
  