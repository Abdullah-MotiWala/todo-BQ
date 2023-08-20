import types from "./actionTypes"

const initialState = {
    name: "",
    fname: ""
}

function reducer(state = initialState, action) {
    if (action.type === types.NAME) return { ...state, name: action.payload }
    else if (action.type === 'fname') return { ...state, fname: action.payload }
    else return state
}

export default reducer