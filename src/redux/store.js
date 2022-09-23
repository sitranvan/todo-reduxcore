import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools() // dùng debug trên UI 
const store = createStore(rootReducer, composedEnhancers)

export default store

