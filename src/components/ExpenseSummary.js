import React from 'react'
import filterExpenses from "../selectors/expenses"
import { connect } from "react-redux"
import selectExpensesTotal from "../selectors/ExpensesTotal"

export const ExpensesSummary = ({ expensesCount , expensesTotal }) => (
    <div>
        <h1>Viewing {expensesCount} {expensesCount === 1 ? " expense" : " expenses"} totalling {expensesTotal}</h1>
    </div>
    
)

const mapStateToProps = (state) => {
    const filteredExpenses = filterExpenses(state.expenses, state.filter)
    return {
        expensesCount: filteredExpenses.length ,
        expensesTotal : selectExpensesTotal(filteredExpenses)
    }
}

const ConnectedExpensesSummary = connect(mapStateToProps)(ExpensesSummary)

export default ConnectedExpensesSummary