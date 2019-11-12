import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import * as reducers from "./Vendors/Reducer-Exporter"
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers(reducers)
// const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
