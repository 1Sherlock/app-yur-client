import {UPDATE_STATE_MAIN} from "../types";

const initialState = {}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATE_MAIN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}