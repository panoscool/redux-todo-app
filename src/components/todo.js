import React from 'react';

const Todo = ({ toggle, completed, text, remove }) => (
  <li
    onClick={toggle}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
  <button className="btn btn-remove" onClick={remove} >Remove</button>
    {text}
  </li>
)

export default Todo;