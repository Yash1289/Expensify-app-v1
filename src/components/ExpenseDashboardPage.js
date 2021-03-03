const React = require("react");
import ConnectedExpensesList from  "./ExpensesList"
import ExpensesListFilter from  "./ExpensesListFilter"

const ExpenseDashboardPage = () => (
    <div>
        <p> this is form my dashboard component</p>
        <ConnectedExpensesList />
        <ExpensesListFilter />
    </div>
)

export default ExpenseDashboardPage ;