import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class Todolist extends Component {
	render() {
		const { items, handleDelete, handleEdit, clearList } = this.props;
		return (
			<ul className="list-group my-5">
				<h3 className="text-center">Todo List</h3>
				{/* <TodoItem handleDelete={handleDelete} handleEdit={handleEdit}/> */}
				{items.map(item => {
					return (
						<TodoItem
							key={item.id}
							title={item.title}
							handleDelete={() => handleDelete(item.id)}
							handleEdit={() => handleEdit(item.id)}
						></TodoItem>
					);
				})}
				<button
					type="submit"
					className="btn btn-block btn-danger mt-5"
					onClick={clearList}
				>
					{" "}
					Clear List{" "}
				</button>
			</ul>
		);
	}
}
