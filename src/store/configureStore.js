import { createStore , combineReducers , applyMiddleware } from "redux"
import expenseReducer from "../reducers/expenses"
import filterReducer from "../reducers/filter"
import authReducer from "../reducers/auth"
import thunk from "redux-thunk" ;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const storeConfigure  = () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filter: filterReducer,
            auth : authReducer 
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store ;
}

export default storeConfigure