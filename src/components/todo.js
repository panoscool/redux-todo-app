import React from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
  <button className="btn btn-remove" onClick >Remove</button>
    {text}
  </li>
)

export default Todo;