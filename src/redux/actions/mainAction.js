import {UPDATE_STATE_MAIN} from "../types";

export function updateState(data){
    return {
        type: UPDATE_STATE_MAIN,
        payload: data
    }
}