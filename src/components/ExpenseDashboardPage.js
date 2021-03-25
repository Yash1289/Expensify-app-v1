const React = require("react");
import { connect } from "react-redux"
import { startSetExpense } from "../actions/expenses"
import ConnectedExpensesList from  "./ExpensesList"
import ExpensesListFilter from  "./ExpensesListFilter"
import ExpensesSummary from "./ExpenseSummary"


const ExpenseDashboardPage = () => (
     <div>
        <ExpensesSummary />
        <ExpensesListFilter />
        <ConnectedExpensesList />
    </div>
)



export default ExpenseDashboardPage
