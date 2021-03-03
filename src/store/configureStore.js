import { createStore , combineReducers} from "redux"
import expenseReducer from "../reducers/expenses"
import filterReducer from "../reducers/filter"



const storeConfigure  = () => {
    const store = createStore(
        combineReducers({
            expenses: expenseReducer,
            filter: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    )
    return store ;
}

export default storeConfigure