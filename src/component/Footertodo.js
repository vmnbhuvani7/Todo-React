import React, { Component } from 'react'

export class Footertodo extends Component {
    
    render() {
        return (
            <div>
                <span>{this.props.itemLeft} Item left</span>
                 <button onClick={this.props.allUser} className="btn btn-success">All</button>
                 <button onClick={this.props.activeUser} className="btn btn-success" >Active</button>
                 <button onClick={this.props.completedUser} className="btn btn-success">Completed</button>
                 <button className="btn btn-success" onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

export default Footertodo
