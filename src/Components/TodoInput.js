import React, { Component } from 'react';


export default class TodoInput extends Component {
    render() {
        return (
            <div className='card card-body my-3'>
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-book bg-success"/>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder='Add Todo Item'/>
                    </div>
                    
                    <button type='submit' className="btn btn-success mt-3">Add Item</button>
                </form>
            </div>
        )
    }
}
