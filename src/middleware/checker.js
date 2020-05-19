import {ADD_TODO} from "../actions/todos";
import {ADD_GOAL} from "../actions/goals";

const checker = (store) => (next) => (action) => {
    if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('wo')) {
        return alert('bad todo!')
    }
    if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('wo')) {
        return alert('bad goal!')
    }
    return next(action);
};

export default checker;
