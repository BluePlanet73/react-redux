import {ADD_GOAL, ADD_TODO, CHANGE_FORM} from "../utils/actionTypes";

const checker = store => next => action => {
    if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('wo')) {
        return alert('bad todo!')
    }
    if (action.type === ADD_GOAL && action["goal"].name.toLowerCase().includes('wo')) {
        return alert('bad goal!')
    }
    if (action.type === CHANGE_FORM) {
        if (Number(action.form.min) >= Number(action.form.max)) {
            return alert('bad !')
        }
    }
    return next(action);
};

export default checker;
