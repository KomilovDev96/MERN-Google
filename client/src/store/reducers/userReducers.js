const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const ISAUTH = "isAuth"
const defaultState = {
    curentUser: {},
    isAuth: false,
}

export default function userReducers(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                curentUser: action.payload,
                isAuth: true,
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                curentUser: {},
                isAuth: false
            }
        case ISAUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state
    }
}

export const setUser = (user) => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })
export const isAuthSet = (auth) => ({ type: ISAUTH, payload: auth })