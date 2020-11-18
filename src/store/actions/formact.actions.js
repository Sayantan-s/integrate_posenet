import { CLOSE_FORM, OPEN_FORM } from "../types"

export const FORM_IS_OPEN = _ => {
    return { 
        type : OPEN_FORM
    }
}

export const FORM_IS_CLOSED = _ => {
    return{ 
        type : CLOSE_FORM
    }
}