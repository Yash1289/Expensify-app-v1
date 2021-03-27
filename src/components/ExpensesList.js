import React from 'react'
import ExpenseListItem from "./ExpenseListItem"
import filterExpenses from "../selectors/expenses"
import { connect } from "react-redux"



export const ExpensesList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {props.expenses.length === 0 &&
                <div className="list-item list-item--message">
                    <span >No Expenses</span>
                </div>}
            {
                props.expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: filterExpenses(state.expenses, state.filter)
    }
}

const ConnectedExpensesList = connect(mapStateToProps)(ExpensesList)

export default ConnectedExpensesList