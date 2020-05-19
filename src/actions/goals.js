import API from 'goals-todos-api'
import {removeGoal, addGoal} from '../utils/helpers'

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

export function handleRemoveGoalAction(item) {
    return (dispatch) => {
        dispatch(removeGoal(item.id));
        API.deleteGoal(item.id)
            .catch(() => {
                dispatch(addGoal(item));
                alert('删除失败！');
            })
    }
}

export function handleAddGoal(item) {
    return (dispatch) => {
        dispatch(addGoal(item));
        API.saveGoal(item)
            .catch(() => {
                dispatch(removeGoal(item.id));
                alert('添加失败！');
            })
    }
}
