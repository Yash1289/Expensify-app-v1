

const expenseReducerDefaultState = []

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case "ExpenseAdd":
            return [
                ...state, action.expense
            ];
        case "ExpenseRemove":
            return state.filter((expense) => expense.id !== action.id)
        case "ExpenseEdit":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.update }
                }
                else {
                    return expense;
                }
            })
        default:
            return state;
    }
}

export default expenseReducer