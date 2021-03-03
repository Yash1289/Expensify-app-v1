const rupeeFormatter = require("rupee-formatter")

const expensesTotal = (expenses = []) => {
    /* let totalAmount = 0

    expenses.forEach((expense) => {
        totalAmount = totalAmount + expense.amount
    })
    return rupeeFormatter(totalAmount) 
    
    Alternative new syntax below */

    let totalAmount =  expenses.map((expense) => expense.amount).reduce((sum , value) => {
        return sum + value
    }, 0)

    return rupeeFormatter(totalAmount)
}

export default expensesTotal 