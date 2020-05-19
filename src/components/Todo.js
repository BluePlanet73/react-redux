import React from 'react'
import {connect} from 'react-redux'
import List from "./List";
import {generateId} from '../utils/index'
import {handleAddTodo, handleRemoveTodo, handleToggleTodo} from "../actions/todos";

class Todos extends React.Component {
    addItem = (e) => {
        e.preventDefault();
        const name = this.input.value;
        this.input.value = '';
        const item = {
            id: generateId(),
            name,
            complete: false,
        };
        this.props.dispatch(handleAddTodo(item));
    };

    removeItem = (item) => {
        this.props.dispatch(handleRemoveTodo(item));
    };

    changeItem = (item) => {
        this.props.dispatch(handleToggleTodo(item));
    };

    render() {
        return (
            <div>
                <h1>TODOS LIST</h1>
                <input type="text" placeholder="add Todo" ref={(input) => {
                    this.input = input
                }}/>
                <button onClick={this.addItem}>add Todo</button>
                <List items={this.props.todos} remove={this.removeItem} change={this.changeItem}/>
            </div>
        )
    }
}

export default connect((state) => ({
    todos: state.todos
}))(Todos);
