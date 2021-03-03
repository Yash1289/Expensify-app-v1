import { TestScheduler } from "jest"
import expenseReducer from "../../reducers/expenses"
import { v4 as uuidv4 } from "uuid"
import moment from "moment"
import expenses from "../fixtures/expenses"

test("Should set the expense array to default state at the start", () => {
    const state = expenseReducer(undefined , { type: "@@INIT"})

    expect(state).toEqual([])
})

test("Should add a new expense onto the array ", () => {

    const state = expenseReducer( undefined , { type : "ExpenseAdd" , expense : expenses[0] })

    expect(state).toEqual([ expenses[0] ])
})

test("Should remove a expense from the id given", () => {
    const currentState = [
        {
            description: "Coffee",
            id: 1,
            note: "Friends forced me into buying a coffee for everyonee",
            amount: 120,
            createdAt: 0
        },
        {
            description: "Tea",
            id: 2,
            note: "Everyone drinks it so i drink it too what's the problem",
            amount: 35,
            createdAt: moment(0).add(4, "days").valueOf()
        }
    ]

    const state = expenseReducer(expenses, { type: "ExpenseRemove" , id : 2})

    expect(state).toEqual([expenses[0] , expenses[2]])
})

test("Should edit a expense according to the update given", () => {
    
    const state = expenseReducer(expenses , { type : "ExpenseEdit" , id: 2 , update : { description : "Tang"}})

    expect(state[1].description).toBe("Tang")
})