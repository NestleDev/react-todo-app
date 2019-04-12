import React from 'react';
import '../scss/blocks/TodoList.scss';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div className="todo-list">
            <ul className="todo-list__list">
                {props.todos.map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            onChange={props.onChange}
                            deleteTodoById={props.deleteTodoById}
                            editTodo={props.editTodo}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoList;

