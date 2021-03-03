import { TestScheduler } from "jest"
import moment from "moment"
import filterReducer from "../../reducers/filter"

test("Should set the default state ",() => {
    const state = filterReducer(undefined , { type : "@@INIT"})

    expect(state).toEqual({
        text : "",
        sortBy : "date" ,
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})

test("Should set the filter to given text", () => {
    const state = filterReducer(undefined , { type : "FilterSet" , update : { text : "Yupes"}})

    expect(state.text).toBe("Yupes")
})

test("Should set the sortBy to date", () => {
    const stateCurrent = {
        text : "" ,
        sortBy : "amount" ,
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    }

    const state = filterReducer(stateCurrent, { type: "SortByDate"})

    expect(state.sortBy).toBe("date")
})

test("Should set the sortBy to amount ", () => {
    const state = filterReducer(undefined , { type : "SortByAmount"})

    expect(state.sortBy).toBe("amount")
})

test("Should set the start Date filter", () => {
    const startDate = moment().add(4, "days")
    const state = filterReducer(undefined, { type:  "SetStartDate" , update : { startDate  }})

    expect(state.startDate).toBe(startDate)
})

test("Should set the endDate filter" , () => {
    const endDate = moment().subtract(5, "days")
    const state = filterReducer(undefined , {type : "SetEndDate" , update : {endDate}})

    expect(state.endDate).toBe(endDate)
})