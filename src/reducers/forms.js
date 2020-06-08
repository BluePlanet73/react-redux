import {CHANGE_FORM} from "../utils/actionTypes";

export default function forms(state = [
    {
        id: "attr1",
        min: 0,
        max: 0
    }, {
        id: "attr2",
        min: 0,
        max: 0
    }
], action) {
    switch (action.type) {
        case CHANGE_FORM:
            return state.map(form => form.id !== action.form.id ? form : Object.assign({}, form, action.form));
        default:
            return state;
    }
}
