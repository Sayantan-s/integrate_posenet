import { CLOSE_FORM, OPEN_FORM } from "../types"

export const openForm = _ => {
    return { 
        type : OPEN_FORM
    }
}

export const closeForm = _ => {
    return{ 
        type : CLOSE_FORM
    }
}