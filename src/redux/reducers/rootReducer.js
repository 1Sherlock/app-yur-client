import {combineReducers} from "redux";
import {mainReducer} from "./mainReducer";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    main: mainReducer,
    auth: authReducer
})