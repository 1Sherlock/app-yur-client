import {UPDATE_STATE_AUTH} from "../types";

const initialState = {
    authState: 1,
    verificationData: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATE_AUTH:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}