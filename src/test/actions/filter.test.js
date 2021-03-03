import { TestScheduler } from "jest"
import moment from "moment"
import { setTextFilter , sortByAmount , sortByDate ,setEndDate , setStartDate } from "../../actions/filter"

test("Should set a given text as textfilter" , () => {
    const action = setTextFilter("Gas")

    expect(action).toEqual({
        type : "FilterSet" ,
        update : { text : "Gas"}
    })
})

test("Should set sortBy to Amount", () => {
    const action = sortByAmount()

    expect(action).toEqual({
        type: "SortByAmount"
    })
})

test("Should set sortBy to Date", () => {
    const action = sortByDate()

    expect(action).toEqual({
        type : "SortByDate"
    })
})

test("Should set the given date as StartDate", () => {
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: "SetStartDate",
        update: { startDate: moment(0) }
    })
})

test("Should set the given date as EndDate", () => {
    const action = setEndDate(moment(0))

    expect(action).toEqual({
        type : "SetEndDate" ,
        update: { endDate : moment(0)}
    })
})