import _ from "lodash";
import uuidv4 from "uuid/v4";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.text,
          completed: false
        }
      ];

    case "TOGGLE_TODO":
      return state.map(
        t => (t.id === action.id ? { ...t, completed: !t.completed } : t)
      );

    case "REMOVE_TODO":
      return state.filter(t => t.id !== action.id);

    default:
      return state;
  }
};

export default todos;
