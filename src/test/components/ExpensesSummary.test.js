import React from "react"
import { shallow } from "enzyme"
import {ExpensesSummary} from "../../components/ExpenseSummary"
import { TestScheduler } from "jest"

test("should correctly render ExpensesSummary with 1 expense", () => {
    const wrapper  = shallow(<ExpensesSummary expensesCount = {1} expensesTotal = {256.35} />)
    expect(wrapper).toMatchSnapshot()
})

test("Should correctly render ExpensesSummary with 2 expenses" ,() => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={3526.3}/>)
    expect(wrapper).toMatchSnapshot()
})