import { TestScheduler } from "jest"
import { expenseAdder, expenseRemover , expenseEdit } from "../../actions/expenses"

test("Should Remove a Expense", () => {
    const action = expenseRemover({ id : "254186"})

    expect(action).toEqual({
        type: "ExpenseRemove",
        id : "254186"
    })
}) 

test("Should Edit a Expense", () => {
    const action = expenseEdit("215368", { note : "New note value"})

    expect(action).toEqual({
        type : "ExpenseEdit" ,
        id : "215368" ,
        update : { note : "New note value" }
    })
})

test("Should add a new Expense with provided values", () => {
    const expenseData = { 
        description: "Maggie", 
        note: "purchased from local vendor", 
        amount: 48, 
        createdAt: 101524
     }
    const action = expenseAdder(expenseData)
    
    expect(action).toEqual({
        type : "ExpenseAdd" ,
        expense : {
            ...expenseData ,
            id : expect.any(String)
        }
    })
})

test("should add a new expense with default values", () => {
     const action = expenseAdder()

     expect(action).toEqual({
         type: "ExpenseAdd" ,
         expense: {
            description : "",
            note : "",
            amount : 0,
            createdAt : undefined,
            id : expect.any(String)
         }
     })
})

