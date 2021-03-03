import React from "react" ;
import ReactDOM from "react-dom"
import "normalize.css/normalize.css"
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css"
import storeConfigure from "./store/configureStore"
import { expenseAdder , expenseRemover , expenseEdit} from "./actions/expenses"
import { setTextFilter , sortByAmount , sortByDate , setStartDate , setEndDate } from "./actions/filter"
import filterExpenses from "./selectors/expenses"
import AppRouter from "../src/Routers/AppRouter"
import { Provider } from "react-redux"

 const store  = storeConfigure();

const expenseOne = store.dispatch(expenseAdder({  description : "Water Bill" , amount : 1800 , createdAt : 690}))
const expenseTwo = store.dispatch(expenseAdder({ description : "Gas Bill" , amount : 950 , createdAt : 200}))
const expenseThree = store.dispatch(expenseAdder({ description: "Rent", amount: 3500, createdAt: 350 }))


const data = store.getState()

console.log(filterExpenses( data.expenses , data.filter)); 

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx , document.querySelector("#app"))

