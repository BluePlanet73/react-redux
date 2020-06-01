import {RECEIVE_DATA} from "../utils/actionTypes";

export default function loading(state = true, action) {
    if (action.type === RECEIVE_DATA) {
        return false;
    } else {
        return state;
    }
}
