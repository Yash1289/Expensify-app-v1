import { TestScheduler } from "jest"
import React from "react"
import { shallow } from "enzyme"
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage"


 test("Should render header component ", () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot(); 
}) 