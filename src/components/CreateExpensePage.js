const React = require("react");
import ExpenseForm from "./ExpenseForm"
import { startExpenseAdder } from "../actions/expenses"
import { connect } from "react-redux"

export class CreateExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.CreateExpense(expense)
        this.props.history.push("/")
    }

    render(){
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => (
    {
        CreateExpense: (expense) => dispatch(startExpenseAdder(expense))
    }
)
export default connect(undefined , mapDispatchToProps)(CreateExpensePage)