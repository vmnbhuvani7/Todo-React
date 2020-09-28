import React, { Component } from 'react'

import './App.css';
import AddTodo from './component/AddTodo';
import ListTodo from './component/ListTodo';
import Footertodo from './component/Footertodo';

export class App extends Component {

  state = {
    todos: [],
    status: 'all'
  };

  addTodo = (text) => {
    this.setState({
      todos: [...this.state.todos, { text: text, completed: false }]
    })
  }

  deleteTodoForm = (index) => {
    const newTodo = this.state.todos.filter((todo, i) => {
      return index !== i;
    })
    this.setState({
      todos: newTodo
    })
  }

  toggleComplete = (index) => {
    const newTodos = this.state.todos.map((todo, i) => {
      return (index === i) ? { ...todo, completed: !todo.completed } : todo
    })
    this.setState({
      todos: newTodos
    })
  }

  allUser = () => {
    this.setState({
      status: "all"
    })
  }

  completedUser = () => {
    this.setState({
      status: "completed"
    })
  }

  activeUser = () => {
    this.setState({
      status: "active"
    })
  }
  clearCompleted = () => {
    let newTodos = this.state.todos.filter((todo) => {
      return (todo.completed === false)
    })
    this.setState({
      todos: newTodos
    })
  }
  render() {
    let array = [];

    let itemLeft = this.state.todos.filter((todo) => {
      return todo.completed === false
    }).length;

    // let clearCompleted 

    if (this.state.status === "all") {
      array = this.state.todos
    } else if (this.state.status === "active") {
      array = this.state.todos.filter((todo) => {
        return (todo.completed === false)
      })
    } else {
      array = this.state.todos.filter((todo) => {
        return todo.completed === true;
      })
    }

    return (
      <div className="App" >
        <AddTodo addTodo={this.addTodo}></AddTodo>
        {array && array.map((todo, index) => {
          return (
            <div key={index}>
              <ListTodo
                key={index}
                index={index}
                todo={todo}
                deleteTodoForm={this.deleteTodoForm.bind(this, index)}
                toggleComplete={this.toggleComplete}
              >
              </ListTodo>
            </div>
          )
        })
        }

        {this.state.todos.length === 0 && (<p>No data fount</p>)}

        < Footertodo
          allUser={this.allUser}
          activeUser={this.activeUser}
          completedUser={this.completedUser}
          itemLeft={itemLeft}
          clearCompleted={this.clearCompleted}
        >
        </Footertodo >

      </div >
    )

  }
}

export default App
