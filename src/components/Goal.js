import React from 'react'
import {handleAddGoal, handleRemoveGoalAction} from "../actions/goals";
import List from "./List";
import {generateId} from '../utils/index'
import {connect} from 'react-redux'

class Goals extends React.Component {
    addItem = (e) => {
        e.preventDefault();
        const name = this.input.value;
        this.input.value = '';
        const item = {
            id: generateId(),
            name,
            complete: false,
        };
        this.props.dispatch(handleAddGoal(item));
    };

    removeItem = (item) => {
        this.props.dispatch(handleRemoveGoalAction(item));
    };

    render() {
        return (
            <div>
                <h1>GOALS LIST</h1>
                <input type="text" placeholder="add Todo" ref={(input) => {
                    this.input = input
                }}/>
                <button onClick={this.addItem}>add Goal</button>
                <List items={this.props.goals} remove={this.removeItem}/>
            </div>
        )
    }
}

export default connect((state) => ({goals: state.goals}))(Goals)
