import React, { Component } from "react";
import TodoInput from "./Components/TodoInput";
import Todolist from "./Components/Todolist";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export class TodoApp extends Component {
	state = {
		items: [
			// { id: 1, title: "wake up" },
			// { id: 2, title: "Eat Lunch" },
			// { id: 3, title: "Rest" }
		],
		id: uuid(),
		item: "",
		editItem: false
	};

	handleChange = e => {
		// console.log("handle change");
		this.setState({
			item: e.target.value
		});
	};

	handleSubmit = e => {
		// console.log("handle submit");
		e.preventDefault();
		const newItem = {
			id: this.state.id,
			title: this.state.item
		};
		const updatedItems = [...this.state.items, newItem];

		this.setState(
			{
				items: updatedItems,
				item: "",
				id: uuid(),
				editItem: false
			},
			// () => console.log(this.state)
		);
	};

	handleDelete = id => {
        // console.log(`handle delete ${id} `);
        const fillterItem = this.state.items.filter(item=>item.id !== id);
        this.setState({
            items:fillterItem
        })
	};

	handleEdit = id => {

        // const filterItem = this.state.items.filter(item => item.id !== id);
		// console.log(filterItem)
		// const selectedItem = this.state.items.find(item=> item.id === id)
		// this.setState({
		// 	items: filterItem,
		// 	item: selectedItem.title,
		// 	id:id,
		// 	editItem: true
		// })
        // console.log(`handle edit ${id} `);
        const filterItem = this.state.items.filter(item=> item.id !== id);
        const selectedItem = this.state.items.find(item=> item.id === id);
        this.setState({
            items: filterItem,
            item: selectedItem.title,
            id: id,
            editItem: true,
        })

        
	};

    // handleEdit = id => {
	// 	const filterItem = this.state.items.filter(item => item.id !== id);
	// 	console.log(filterItem)
	// 	const selectedItem = this.state.items.find(item=> item.id === id)
	// 	this.setState({
	// 		items: filterItem,
	// 		item: selectedItem.title,
	// 		id:id,
	// 		editItem: true
	// 	})
	// };

	clearList = () => {
        // console.log("clear list");
        this.setState({
            items:[]		
        })
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-5">
						<h1 className="text-capitalize text-center"> Todo App</h1>
						<TodoInput
							item={this.state.item}
							handleChange={(this, this.handleChange)}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						/>

						<Todolist
							items={this.state.items}
							handleEdit={this.handleEdit}
							handleDelete={this.handleDelete}
							clearList={this.clearList}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default TodoApp;
