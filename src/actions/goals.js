import API from 'goals-todos-api';
import {ADD_GOAL, CHANGE_FORM, REMOVE_GOAL} from "../utils/actionTypes";

export function changeForm(form) {
    console.log(form);
    return dispatch => {
        dispatch({
            type: CHANGE_FORM,
            form
        });
    }
}

export function handleRemoveGoalAction(item) {
    return (dispatch) => {
        dispatch({
            type: REMOVE_GOAL,
            id: item.id
        });
        API.deleteGoal(item.id)
            .catch(() => {
                dispatch({
                    type: ADD_GOAL,
                    item
                });
                alert('删除失败！');
            })
    }
}

export function handleAddGoal(item) {
    return (dispatch) => {
        dispatch({
            type: ADD_GOAL,
            item
        });
        API.saveGoal(item)
            .catch(() => {
                dispatch({
                    type: REMOVE_GOAL,
                    id: item.id
                });
                alert('添加失败！');
            })
    }
}
