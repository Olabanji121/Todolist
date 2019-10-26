import React, { Component } from "react";
import TodoInput from "./Components/TodoInput";
import Todolist from "./Components/Todolist";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid'

export class TodoApp extends Component {
	state = {
		items: [
			{ id: 1, title: "wake up" },
			{ id: 2, title: "Eat Lunch" },
			{ id: 3, title: "Rest" }
        ],
        id: uuid(),
        item: '',
        editItem: false,
    };

    handleChange =(e)=>{
        console.log('handle change')
    }

    handleSubmit =(e)=>{
        console.log('handle submit')
    }

    handleDelete =(id)=>{
        console.log(`handle delete ${id} `)
    }

    handleEdit =(id)=>{
        console.log(`handle edit ${id} `)
    }

    clearList=()=>{
        console.log('clear list')
    }

	render() {

        // console.log(this.state)
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-5">
						<h1 className="text-capitalize text-center">  Todo App</h1>
						<TodoInput item ={this.state.item}  handleChange={this,this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>

						<Todolist items={this.state.items} handleEdit={this.handleEdit} handleDelete={this.handleDelete}  clearList= {this.clearList}/>
					</div>
				</div>
			</div>
		);
	}
}

export default TodoApp;
