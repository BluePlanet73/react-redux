import API from "goals-todos-api";
import {receiveData} from '../utils/helpers';

export const RECEIVE_DATA = 'RECEIVE_DATA';

export function handleInitialDate() {
    return (dispatch) => {
        return Promise.all([
            API.fetchTodos(),
            API.fetchGoals(),
        ])
            .then(([todos, goals]) => {
                dispatch(receiveData(todos, goals));
            });
    }
}
