import API from 'goals-todos-api'
import {toggleTodo, removeTodo, addTodo} from '../utils/helpers'

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export function handleToggleTodo(item) {
    return (dispatch) => {
        dispatch(toggleTodo(item.id));
        API.saveTodoToggle(item.id)
            .catch(() => {
                dispatch(toggleTodo(item.id));
                alert('操作失败！');
            })
    }
}

export function handleRemoveTodo(item) {
    return (dispatch) => {
        dispatch(removeTodo(item.id));
        API.deleteTodo(item.id)
            .catch(() => {
                dispatch(addTodo(item));
                alert('删除失败！');
            })
    }
}

export function handleAddTodo(item) {
    return (dispatch) => {
        dispatch(addTodo(item));
        API.saveTodo(item)
            .catch(() => {
                dispatch(removeTodo(item.id));
                alert('添加失败！');
            })
    }
}
