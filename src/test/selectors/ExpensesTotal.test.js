import { TestScheduler } from "jest"
import selectExpensesTotal from "../../selectors/ExpensesTotal"
import expenses from "../fixtures/expenses"
import moment from "moment"
const rupeeFormatter = require("rupee-formatter")


test("Should correctly add up multiple expenses" , () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(rupeeFormatter(225))
})

test("Should return 0 if no expense", () => {
    const result = selectExpensesTotal()
    expect(result).toBe(rupeeFormatter(0))
})