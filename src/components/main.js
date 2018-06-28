import React, { Component } from 'react';
import Note from './note';
import './main.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: '',
      notes: [],
    }
  }

  updateNoteText(noteText) {
    this.setState({noteText: noteText.target.value})
  }

  addNote() {
    if (this.state.noteText === '') {return}
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText)
    this.setState({noteText: ''})
    this.textInout.focus();
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText)
      this.setState({noteText: ''})
    }
  }

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({notes: notesArr})
  }

  render() {
    let notes = this.state.notes.map((val, key) => {
      return <Note key={key} text={val} deleteMethod={() => this.deleteNote(key)}
      />
    });

    return (
      <div className="container">

        <div className="header">React Todo App</div>
        {notes}

        <div className="btn" onClick={() => this.addNote()}>+</div>

        <input type="text"
          ref={((input) => {this.textInout = input})}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyUp={(e) => this.handleKeyUp(e)}
          />
      </div>
    );
  }
}

export default Todo;
