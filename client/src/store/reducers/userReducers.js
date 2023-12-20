const SET_USER = "SET_USER"

const defaultState = {
    curentUser: {},
    isAuth: false
}

export default function userReducers(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                curentUser: action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export const setUser = user => ({ type: SET_USER, payload: user })