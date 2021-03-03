import React from 'react'
import ExpenseListItem from "./ExpenseListItem"
import filterExpenses from "../selectors/expenses"
import { connect } from "react-redux"


export const ExpensesList = (props) => (
    <div>
        <h1>Expense List</h1>
        { props.expenses.length === 0 ? 
        <p>No expenses in the list</p> :
            props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: filterExpenses(state.expenses, state.filter)
    }
}

const ConnectedExpensesList = connect(mapStateToProps)(ExpensesList)

export default ConnectedExpensesList