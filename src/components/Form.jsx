import React, { Component } from 'react';
import '../scss/blocks/btn.scss';
import '../scss/blocks/Form.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const title = event.target.value;

        this.setState({ title })
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.title) {
            this.props.onSubmit(this.state.title);
            this.setState({ title: '' });
        }
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input className="todo-form__input" type="text" value={this.state.title} onChange={this.handleChange} placeholder="Что нужно сделать ?" />
                <button className="btn btn_input" type="submit">Добавить</button>
            </form>
        );
    }
}

export default Form;