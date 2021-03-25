import React from "react" ;
import ReactDOM from "react-dom"
import "normalize.css/normalize.css"
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css"
import storeConfigure from "./store/configureStore"
import { startSetExpense } from "./actions/expenses"
import { setTextFilter , sortByAmount , sortByDate , setStartDate , setEndDate } from "./actions/filter"
import filterExpenses from "./selectors/expenses"
import AppRouter from "../src/Routers/AppRouter"
import { Provider } from "react-redux"
import "../src/firebase/firebase"

 const store  = storeConfigure();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(<p>LOADINGG....</p>, document.querySelector("#app"))

store.dispatch(startSetExpense()).then(() => {
    ReactDOM.render(jsx, document.querySelector("#app"))
})



