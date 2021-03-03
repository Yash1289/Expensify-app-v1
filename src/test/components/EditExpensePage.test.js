import React from "react"
import { shallow } from "enzyme"
import { EditExpensePage } from "../../components/EditExpensePage"
import expenses from "../fixtures/expenses"

let ExpenseEdit , history , ExpenseRemover , wrapper ;
 beforeEach(() => {
      ExpenseEdit = jest.fn()
      history = {
         push: jest.fn()
     }
      ExpenseRemover = jest.fn()
      wrapper = shallow(<EditExpensePage
         expense={expenses[1]}
         ExpenseEdit={ExpenseEdit}
         history={history}
         ExpenseRemover={ExpenseRemover}
     />)
 }) 

test("Should render EditExpensePage correctly" ,() => {
    expect(wrapper).toMatchSnapshot()
})

test("Should call on submit with the necessary arguments", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1])
    expect(ExpenseEdit).toHaveBeenLastCalledWith(expenses[1].id ,expenses[1])
    expect(history.push).toHaveBeenLastCalledWith("/")
})

test("Should call onClick with the necessary arguments ", () => {
    wrapper.find("button").simulate("click")
    expect(ExpenseRemover).toHaveBeenLastCalledWith({ id : expenses[1].id })
    expect(history.push).toHaveBeenLastCalledWith("/")
}) 