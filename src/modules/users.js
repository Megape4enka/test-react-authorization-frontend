export const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    user: {},
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                user: action.payload.data,
            }
        default:
            return state
    }
}

export function setUserData(data) {
    return {
        type: SET_USER_DATA,
        payload: {
            data,
        },
    }
}