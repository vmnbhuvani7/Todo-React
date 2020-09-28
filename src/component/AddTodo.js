import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        todoText: ""
    }

    changeText = (e) => {
        this.setState({
            todoText: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.todoText);
        this.setState({
            todoText: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        type="text"
                        onChange={this.changeText}
                        value={this.state.todoText}
                        placeholder="Enter Your Name"
                    />
                    <button  type="submit" className="btn btn-primary" >Add Name</button>
                </form>
            </div>
        )
    }
}

export default AddTodo
