import { createStore } from 'redux'
import formReducer from './reducers/formReducer.reducer'

const store = createStore(formReducer);

export default store;