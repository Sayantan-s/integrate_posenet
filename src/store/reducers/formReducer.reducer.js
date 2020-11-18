import { CLOSE_FORM, OPEN_FORM } from "../types"

const initialState = {
    backdrop : false,
    formModal : false,
}

const formReducer = (state = initialState,action) => {
    switch(action.type){
        case OPEN_FORM :
            return {
                ...state,
                backdrop : true,
                formModal : true
            }
        case CLOSE_FORM : 
            return {
                ...state,
                backdrop : false,
                formModal : false
            }
        default: return state
    }
}

export default formReducer