import API from 'goals-todos-api'
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../utils/actionTypes";

export function handleToggleTodo(item) {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_TODO,
            id: item.id
        });
        API.saveTodoToggle(item.id)
            .catch(() => {
                dispatch({
                    type: TOGGLE_TODO,
                    id: item.id
                });
                alert('操作失败！');
            })
    }
}

export function handleRemoveTodo(item) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_TODO,
            id: item.id,
        });
        API.deleteTodo(item.id)
            .catch(() => {
                dispatch({
                    type: ADD_TODO,
                    todo: item
                });
                alert('删除失败！');
            })
    }
}

export function handleAddTodo(item) {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            todo: item
        });
        API.saveTodo(item)
            .catch(() => {
                dispatch({
                    type: REMOVE_TODO,
                    id: item.id,
                });
                alert('添加失败！');
            })
    }
}
