const React = require("react");
import ExpenseForm from "./ExpenseForm"
import { expenseAdder } from "../actions/expenses"
import { connect } from "react-redux"

export class CreateExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.CreateExpense(expense)
        this.props.history.push("/")
    }

    render(){
        return (
            <div>
                <p>Add Expense</p>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => (
    {
        CreateExpense : (expense) => dispatch(expenseAdder(expense))
    }
)
export default connect(undefined , mapDispatchToProps)(CreateExpensePage)