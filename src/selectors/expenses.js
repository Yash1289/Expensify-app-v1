import moment from "moment"

const filterExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    const filteredExpenses = expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment) : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true ; 
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    })

    return filteredExpenses.sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if (sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default filterExpenses