import { TestScheduler } from "jest"
import { startExpenseAdder ,expenseAdder, expenseRemover, startExpenseEdit , expenseEdit , setExpense , startSetExpense, startExpenseRemover } from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import  database  from "../../firebase/firebase"


const uid = "thisismytestuid"
const defaultAuthState = { auth: { uid : uid } }
const createMockStore = configureMockStore([thunk])


beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id , description, note ,amount, createdAt }) => {
        expensesData[id] = { description , note , amount, createdAt }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
    jest.setTimeout(10000);
})

test("Should setup remove Expense object", () => {
    const action = expenseRemover({ id : "254186"})

    expect(action).toEqual({
        type: "ExpenseRemove",
        id : "254186"
    })
}) 

test("should remove expenses from database ", (done) => {
    const store = createMockStore(defaultAuthState)
    const data = { id : expenses[1].id}
    store.dispatch(startExpenseRemover(data)).then(() => {
        const { id } = data
        const actions = store.getActions()
        expect(actions[0]).toEqual({ type: "ExpenseRemove" , id : id})
        return database.ref(`users/${uid}/expenses`).child(id).once("value")
    }).then((snapshot) => {
        expect(snapshot.val()).toBeNull()
        done();
    })
})


test("Should setup edit Expense object", () => {
    const action = expenseEdit("215368", { note : "New note value"})

    expect(action).toEqual({
        type : "ExpenseEdit" ,
        id : "215368" ,
        update : { note : "New note value" }
    })
})

test("should edit expenses from firebase " , (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    const update = {
        description: "Chai Masala",
        note: "Friends forced me into buying a Chai Masala for everyonee Samjhe",
        amount: 120,
        createdAt: 0
    }
    store.dispatch(startExpenseEdit(id , update)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type : "ExpenseEdit",
            id : id ,
            update : update
        })

        return database.ref(`users/${uid}/expenses`).child(id).once("value")
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(update)
        done()
    })
})

test("Should setup add Expense object with provided values", () => {
    const action = expenseAdder(expenses[1])
    
    expect(action).toEqual({
        type : "ExpenseAdd" ,
        expense : expenses[1]
    })
})

test("should add expense to database and store" , (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: "Tang",
        note: "It is the season of summer and we must drink refreshing things in it",
        amount: 70,
        createdAt: 1000
    }
    store.dispatch(startExpenseAdder(expenseData)).then(() => {
        const actions = store.getActions() ;
        expect(actions[0]).toEqual({
            type: "ExpenseAdd",
            expense : {
                id: expect.any(String),
                ...expenseData
            }   
        });
       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done();
    }) 
},30000)

test("should add expense with deafult values to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefault = {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startExpenseAdder({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ExpenseAdd",
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault)
        done();
    })
}, 30000 )

test("should setup set expense action object with data", () => {
    const action = setExpense(expenses);
    expect(action).toEqual({
        type : "ExpenseSet",
        expenses
    }) 
})

test("Should fetch the expenses from the database", (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type : "ExpenseSet" ,
            expenses
        })
        done();
    })
})

/* test("should add a new expense with default values", () => {
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
}) */

