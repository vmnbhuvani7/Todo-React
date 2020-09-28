import React, { Component } from 'react'

import './Todo.css';

export class ListTodo extends Component {

    click = () => {
        this.props.toggleComplete(this.props.index)
    }

    render() {
        return (
            <div>
                <ul>
                    <li key={this.props.index} >
                        <span
                            className={this.props.todo.completed ? "completed" : ''}
                            onClick={this.click}>{this.props.todo.text}
                        </span>
                        <button
                            className="btn btn-danger"
                            onClick={this.props.deleteTodoForm}
                        >Delete
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ListTodo
