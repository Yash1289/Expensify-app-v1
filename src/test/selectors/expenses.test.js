import moment from "moment" ;
import { TestScheduler } from "jest"
import filterExpenses from "../../selectors/expenses"
import data from "../fixtures/expenses"


test("Should filter on basis of given text", () => {
    const filter = {
        text: "f" ,
        sortBy : "date",
        startDate : undefined ,
        endDate : undefined
    }
    const result = filterExpenses(data , filter)

    expect(result).toEqual([ data[0] ]) 
})

test("Should filter on basis of start date", () => {
    const filter = {
        text : "" ,
        sortBy : "date" ,
        startDate : moment(0) ,
        endDate : undefined 
    }

    const result = filterExpenses(data , filter)

    expect(result).toEqual([ data[1] , data[0] ])
})

test("Should filter on the basis of end date", () => {
    const filter = {
        text  :"" ,
        sortBy : "date",
        startDate : undefined ,
        endDate : moment(0)
    }

    const result = filterExpenses( data , filter )

    expect(result).toEqual([ data[0] , data[2]])
})

test("Should filter on the basis of given date" , () => {
    const filter = {
        text : "",
        sortBy : "date" ,
        startDate : moment(0).subtract(5 , "days"),
        endDate : moment(0).add(5 , "days")
    }

    const result =  filterExpenses(data , filter)

    expect(result).toEqual([data[1], data[0] , data[2]])
})

test("Should filter on the basis of given amount", () => {
    const filter = {
        text : "",
        sortBy : "amount",
        startDate : undefined ,
        endDate : undefined 
    }

    const result = filterExpenses(data , filter)

    expect(result).toEqual([ data[0] , data[2] , data[1]])
})