import React, { Component } from "react";

export default class TodoInput extends Component {
	render() {
		const { item, handleChange, handleSubmit, editItem } = this.props;
		return (
			<div className="card card-body my-3">
				<form onSubmit={handleSubmit}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text">
								<i className="fas fa-book bg-primary" />
							</div>
						</div>
						<input
							type="text"
							value={item}
							onChange={handleChange}
							className="form-control"
							placeholder="Add Todo Item"
						/>
					</div>

					<button
                        type="submit"
                        disabled={item? false: true}
						className={
							editItem
								? "btn btn-block btn-success mt-3"
								: "btn btn-block btn-primary mt-3"
						}
					>
						{editItem ? "Edit Item" : "Add Item"}
					</button>
				</form>
			</div>
		);
	}
}
