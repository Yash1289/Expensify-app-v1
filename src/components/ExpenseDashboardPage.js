const React = require("react");
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

export default ExpenseDashboardPage ;