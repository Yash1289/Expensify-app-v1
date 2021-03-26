import React from "react" ;
import ReactDOM from "react-dom"
import "normalize.css/normalize.css"
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css"
import storeConfigure from "./store/configureStore"
import { startSetExpense } from "./actions/expenses"
import { login, logout } from './actions/auth';
import { setTextFilter , sortByAmount , sortByDate , setStartDate , setEndDate } from "./actions/filter"
import filterExpenses from "./selectors/expenses"
import AppRouter ,{ history } from "../src/Routers/AppRouter"
import { Provider } from "react-redux"
import "../src/firebase/firebase"
import { firebase } from "./firebase/firebase"


 const store  = storeConfigure();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


let hasRendered = false

const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.querySelector("#app"))
        hasRendered = true ;
    }
}    

ReactDOM.render(<p>LOADINGG...</p>, document.querySelector("#app"))

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpense()).then(() => {
            renderApp()
        if(history.location.pathname === "/") {   
            history.push("/dashboard")
        }
        })
    }else {
        store.dispatch(logout())
        renderApp()
        history.push("/")
    }
})

