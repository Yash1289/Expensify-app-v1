import { v4 as uuidv4 } from "uuid"
import database from "../firebase/firebase"

export const expenseAdder = (expense) => ({
    type: "ExpenseAdd",
    expense
});

export const startExpenseAdder = (expenseData = {}) => {
    return (dispatch) => {
        const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData
        const expense = { description , note , amount , createdAt }
        return database.ref("expense").push(expense).then((snapshot) => {
                dispatch(expenseAdder({ id: snapshot.key, ...expense }))
        })
    }
}

 export const setExpense = (expenses) => ({
    type : "ExpenseSet",
    expenses
})

export const startSetExpense = () => {
    return(dispatch) => {
        return database.ref("expense").once("value").then((snapshot) => {
            const expenses = []
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id : childSnapshot.key ,
                    ...childSnapshot.val()
                })

            })
            dispatch(setExpense(expenses))
        })
    }
} 

export const expenseRemover = ({ id }) => ({
    type: "ExpenseRemove",
    id
})

 export const startExpenseRemover = (data) => {
    return(dispatch) => {
        const { id } = data
        return database.ref('expense').child(id).remove().then(() => {
            dispatch(expenseRemover(data))
        })
    }
} 

export const expenseEdit = (id, update) => ({
    type: "ExpenseEdit",
    id,
    update
})

 export const startExpenseEdit = (id , update) => {
    return (dispatch) => {
        return database.ref("expense").child(id).update({...update}).then(() => {
            dispatch(expenseEdit(id , update))
        })
    }
} 