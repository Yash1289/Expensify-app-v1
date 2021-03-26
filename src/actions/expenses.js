import { v4 as uuidv4 } from "uuid"
import database from "../firebase/firebase"

export const expenseAdder = (expense) => ({
    type: "ExpenseAdd",
    expense
});

export const startExpenseAdder = (expenseData = {}) => {
    return (dispatch , getState ) => {
        const uid = getState().auth.uid
        const { description = "", note = "", amount = 0, createdAt = 0 } = expenseData
        const expense = { description , note , amount , createdAt }
        return database.ref(`users/${uid}/expenses`).push(expense).then((snapshot) => {
                dispatch(expenseAdder({ id: snapshot.key, ...expense }))
        })
    }
}

 export const setExpense = (expenses) => ({
    type : "ExpenseSet",
    expenses
})

export const startSetExpense = () => {
    return(dispatch, getState ) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once("value").then((snapshot) => {
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
    return(dispatch , getState) => {
        const uid = getState().auth.uid
        const { id } = data
        return database.ref(`users/${uid}/expenses`).child(id).remove().then(() => {
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
    return (dispatch , getState) => {
        const uid  = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).child(id).update({...update}).then(() => {
            dispatch(expenseEdit(id , update))
        })
    }
} 