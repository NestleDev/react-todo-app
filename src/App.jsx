import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import './scss/blocks/App.scss';

import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import TodoTotals from './components/TodoTotals';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this);
    this.handlerCheck = this.handlerCheck.bind(this);
    this.deleteTodoById = this.deleteTodoById.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo(title) {
    const todo = {
      id: uuidv1(),
      title,
      completed: false
    }

    this.setState({
      todos: [todo, ...this.state.todos]
    })
  }

  handlerCheck(id) {
    const click = new Audio('./audio/04715.mp3');
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    click.volume = 0.1;
    click.play();

    this.setState({ todos });
  }

  deleteTodoById(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos });
  }

  editTodo(id, title) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }

      return todo;
    });

    this.setState({ todos });
  }

  renderStat() {
    return (
      <div className="App__info">
        <div className="App__total-wrap">
          <TodoTotals todos={this.state.todos} />
        </div>
        <div className="App__todos">
          <TodoList
            todos={this.state.todos}
            onChange={this.handlerCheck}
            editTodo={this.editTodo}
            deleteTodoById={this.deleteTodoById} />
        </div>
      </div>
    );
  }

  renderDefaultDisplay() {
    return (
      <div className="default-display">
        <div className="default-display__info">
          <i className="far fa-frown"></i>На данный момент задач нет!</div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <Header title="Планёрка" />
        <main className="App__maincontent">
          <Form onSubmit={this.addTodo} />
          {this.state.todos.length ? this.renderStat() : this.renderDefaultDisplay()}
        </main>
      </div>
    );
  }
}

export default App;


