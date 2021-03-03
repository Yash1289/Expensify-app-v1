const React = require("react");
import ConnectedExpensesList from  "./ExpensesList"
import ExpensesListFilter from  "./ExpensesListFilter"

const ExpenseDashboardPage = () => (
    <div>
        <ConnectedExpensesList />
        <ExpensesListFilter />
    </div>
)

export default ExpenseDashboardPage ;