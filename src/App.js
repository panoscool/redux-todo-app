import React, { Component } from 'react';
import Footer from './components/footer';
import AddTodo from './containers/add-todo';
import VisibleTodoList from './containers/visible_todo_list';
import './App.css';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
