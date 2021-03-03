import React from "react"
import { shallow } from "enzyme"
import { CreateExpensePage } from "../../components/CreateExpensePage"
import expenses from "../fixtures/expenses"

let CreateExpense, history, wrapper ;

beforeEach(() => {
     CreateExpense = jest.fn()
     history = {
        push: jest.fn()
    }
     wrapper = shallow(<CreateExpensePage CreateExpense={CreateExpense} history={history} />)
})

test("Should render CreateExpensePage correctly", () => {
    expect(wrapper).toMatchSnapshot()
}) 

test("Should call onSubmit with the necessary arguments", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2])
    expect(CreateExpense).toHaveBeenLastCalledWith(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith("/")
})   