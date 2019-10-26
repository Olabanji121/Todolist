import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class Todolist extends Component {
    render() {
        return (
            <div className='col-10 mx-auto col-md-8 mt-5'>
            
                <ul className="list-group">
                <h2 className="text-center">Todo List</h2>
                <TodoItem/>
                </ul>
                
            </div>
        )
    }
}
