import React from "react"
import { shallow } from "enzyme"
import ExpenseForm from "../../components/ExpenseForm"
import { TestScheduler } from "jest"
import moment from "moment"
import expenses from "../fixtures/expenses"

test("Should render ExpenseForm correctly" , () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test("Should render ExpenseForm with data correctly", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})

test("Should render error for invalid form submission" , () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find("form").simulate("submit", {
        preventDefault : () => {}
    })
    expect(wrapper.state("error").length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test("Should set description on input change", () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = "Gazab ka hai din socho zara yeh diwana pan socho zara"
    wrapper.find('input').at(0).simulate("change" , {
        target : { value }
    })
    expect(wrapper.state("description")).toBe(value)
})

test("Should set note on text area change" , () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = "My netflix subscription was about to end so i reacharged it"
    wrapper.find("textarea").simulate("change" , {
        target : {value}
    })
    expect(wrapper.state("note")).toBe(value)
})

test("Should set amount for valid input", () => {
    const wrapper = shallow(<ExpenseForm />)
    const value = "125.36"
    wrapper.find("input").at(1).simulate("change" , {
        target : { value }
    })
    expect(wrapper.state("amount")).toBe(value)
})

test("Should not set amount for invalid input", () => {
    const wrapper =shallow(<ExpenseForm />)
    const value = "12.3658"
    wrapper.find("input").at(1).simulate("change", {
        target : {value}
    })
    expect(wrapper.state("amount")).toBe("")
})

test("Should call submit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find("form").simulate("submit", {
        preventDefault : () => {}
    })
    expect(wrapper.state("error")).toBe("")
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[0].description,
        note : expenses[0].note ,
        amount : expenses[0].amount,
        createdAt : expenses[0].createdAt
    })
})

test("Should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop("onDateChange")(now)
    expect(wrapper.state("createdAt")).toEqual(now)
})

test("Should set focus on focus change", () => {
    const focused =  true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop("onFocusChange")({focused})
    expect(wrapper.state("calendarFocused")).toBe(focused)
})