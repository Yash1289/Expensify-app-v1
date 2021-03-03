import { v4 as uuidv4 } from "uuid"

export const expenseAdder = ({ description = "", note = "", amount = 0, createdAt = undefined } = {}) => ({
    type: "ExpenseAdd",
    expense: { id: uuidv4(), description, note, amount, createdAt }
});

export const expenseRemover = ({ id } = {}) => ({
    type: "ExpenseRemove",
    id
})

export const expenseEdit = (id, update) => ({
    type: "ExpenseEdit",
    id,
    update
})