import React from 'react';
import '../scss/blocks/TodoTotals.scss';

function TodoTotals(props) {
    const total = props.todos.length;
    const completed = props.todos.filter((todo) => todo.completed).length;

    return (
        <div className="todo-totals">
            <div className="todo-totals__item">Всего задач <span>{total}</span></div>
            <div className="todo-totals__item">Выполнено <span>{completed}</span></div>
            <div className="todo-totals__item">Осталось <span>{total - completed}</span></div>
        </div>
    );
}

export default TodoTotals;