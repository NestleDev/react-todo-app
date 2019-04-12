import React, { Component } from 'react';
import '../scss/blocks/Todo.scss';

import Checkbox from './Checkbox';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }

        this.handlerEditTodo = this.handlerEditTodo.bind(this);
    }

    onChangeCheck() {
        const id = this.props.todo.id;

        this.props.onChange(id);
    }

    deleteTodo() {
        const id = this.props.todo.id;

        this.props.deleteTodoById(id);
    }

    editTodo() {
        this.setState({ isEditing: true });
    }

    handlerEditTodo(event) {
        event.preventDefault();

        const title = this.refs.title.value;
        const id = this.props.todo.id;

        if (title) {
            this.props.editTodo(id, title);
            this.setState({ isEditing: false })
        }
    }

    renderDisplayEdit() {
        const title = this.props.todo.title;

        return (
            <div className="todo__edit">
                <form className="todo-form" onSubmit={this.handlerEditTodo}>
                    <input
                        type="text"
                        defaultValue={title}
                        ref="title"
                        placeholder="Введите новое имя задачи!"
                        className="todo-form__input" />
                    <button type="submit" className="btn btn_ml_10">Сохранить</button>
                </form>
            </div>
        );
    }

    renderDisplayInfo() {
        const { completed, title } = this.props.todo;

        return (
            <div className="todo__display">
                <div className="todo__info">
                    <Checkbox checked={completed} onChange={() => { this.onChangeCheck() }} />
                    <span className="todo__title">{title}</span>
                </div>
                <div className="todo__controls">
                    <button className="btn btn_fz_10 btn_p_5-10" onClick={() => { this.editTodo() }}>Ред.</button>
                    <button className="btn btn_ml_10 btn_fz_10 btn_p_5-10" onClick={() => { this.deleteTodo() }}>Удал.</button>
                </div>
            </div>
        );
    }

    render() {
        const completed = this.props.todo.completed;

        return (
            <div className={`todo${completed ? " completed" : ""}`}>
                {this.state.isEditing ? this.renderDisplayEdit() : this.renderDisplayInfo()}
            </div >
        )
    }
}

export default Todo;

