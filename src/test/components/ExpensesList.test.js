import React from "react"
import { shallow } from "enzyme"
import { ExpensesList } from "../../components/ExpensesList"
import { TestScheduler } from "jest"
import expenses from "../fixtures/expenses"

test("Should render ExpensesList when no expense is there" , () => {
    const wrapper = shallow(<ExpensesList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})

test("Should render ExpensesList with expenses", () => {
    const wrapper = shallow(<ExpensesList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

