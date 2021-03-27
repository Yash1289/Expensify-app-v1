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
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title"> Add Expense</h1>
                </div>
             </div>
             <div className="content-container"> 
                <ExpenseForm onSubmit={this.onSubmit} />
             </div>  
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