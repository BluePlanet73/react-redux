import {combineReducers} from "redux";
import todos from "./todos";
import goals from "./goals";
import loading from "./loading";
import forms from "./forms";

export default combineReducers({
    todos,
    goals,
    forms,
    loading,
})
