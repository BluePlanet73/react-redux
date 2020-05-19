import {ADD_GOAL, REMOVE_GOAL} from "../actions/goals";
import {RECEIVE_DATA} from "../actions/shared";
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../actions/todos";

export function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal,
    }
}

export function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id,
    }
}

export function receiveData(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals,
    }
}

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id,
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id,
    }
}
