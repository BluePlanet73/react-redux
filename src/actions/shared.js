import API from "goals-todos-api";
import {RECEIVE_DATA} from "../utils/actionTypes";

export function handleInitialDate() {
    return (dispatch) => {
        return Promise.all([
            API.fetchTodos(),
            API.fetchGoals(),
        ])
            .then(([todos, goals]) => {
                dispatch({
                    type: RECEIVE_DATA,
                    todos,
                    goals,
                });
            });
    }
}
