import React from 'react'
import filterExpenses from "../selectors/expenses"
import { connect } from "react-redux"
import selectExpensesTotal from "../selectors/ExpensesTotal"
import { Link } from "react-router-dom"

export const ExpensesSummary = ({ expensesCount , expensesTotal }) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expensesCount === 1 ? " expense" : " expenses"} totalling <span>{expensesTotal}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>     
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