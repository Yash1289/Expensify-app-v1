import React from "react" ;
import { shallow } from "enzyme"
import { ExpensesListFilter } from "../../components/ExpensesListFilter"
import { filters , altFilters } from "../fixtures/filters"
import moment from "moment"

let SetTextFilter , SetStartDate , SetEndDate , SortByDate , SortByAmount , wrapper 

beforeEach(() => {
    SetTextFilter = jest.fn()
    SetStartDate = jest.fn()
    SetEndDate = jest.fn()
    SortByAmount = jest.fn()
    SortByDate = jest.fn()
    wrapper = shallow(
        <ExpensesListFilter 
        filter = {filters}
        SetTextFilter={SetTextFilter}
        SetStartDate={SetStartDate}
        SetEndDate={SetEndDate}
        SortByAmount={SortByAmount}
        SortByDate={SortByDate}
         />)
})

test("Should render expenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

test("Should render expenseListFilter with altFilters correctly", () => {
    wrapper.setProps({
        filter : altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test("Should handle text change" ,() => {
    const value = altFilters.text
    wrapper.find("input").at(0).prop("onChange")({
        target : {value }
    })
    expect(SetTextFilter).toHaveBeenLastCalledWith(value)
})

test("Should sort By Date", () => {
    wrapper.setProps({
        filter : altFilters
    })
    const value = "date"
    wrapper.find("select").prop("onChange")({
        target : {value}
    })
    expect(SortByDate).toHaveBeenCalled()
})

test("Should sort By Amount", () => {
    const value = "amount"
    wrapper.find("select").prop("onChange")({
        target : { value }
    })
    expect(SortByAmount).toHaveBeenCalled()
})

test("Should handle date changes", () => {
    const startDate = moment(0).add(4, "years")
    const endDate = moment(0).add(8 , "years")
    wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate , endDate}) 
    expect(SetStartDate).toHaveBeenLastCalledWith(startDate)
    expect(SetEndDate).toHaveBeenLastCalledWith(endDate)
})

test("Should handle date focus change", () => {
    const calendarFocused = "endDate"
    wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused)
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused)
})