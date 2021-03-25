import { createStore , combineReducers , applyMiddleware } from "redux"
import expenseReducer from "../reducers/expenses"
import filterReducer from "../reducers/filter"
import thunk from "redux-thunk" ;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const storeConfigure  = () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filter: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store ;
}

export default storeConfigure