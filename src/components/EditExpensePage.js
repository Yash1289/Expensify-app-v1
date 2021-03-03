const React = require("react");
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { expenseEdit , expenseRemover } from "../actions/expenses"

export class EditExpensePage extends React.Component { 
    onSubmit = (expense) => {
        this.props.ExpenseEdit(this.props.expense.id , expense)
        this.props.history.push("/")
    }
    onClick = () => {
        this.props.ExpenseRemover({ id: this.props.expense.id })
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
                <button onClick={this.onClick} >Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state , props ) => {
    return {
        expense : state.expenses.find((expense) => expense.id === props.match.params.id )
    }
}

const mapDispatchToProps = ( dispatch , props ) => {
    return {
        ExpenseEdit: (id , expense) => dispatch(expenseEdit(id , expense)),
        ExpenseRemover : (data) => dispatch(expenseRemover(data))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(EditExpensePage) 