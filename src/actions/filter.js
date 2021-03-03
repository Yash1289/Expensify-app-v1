
export const setTextFilter = (text = "") => ({
    type: "FilterSet",
    update: { text }
})

export const sortByAmount = () => ({
    type: "SortByAmount"
})

export const sortByDate = () => ({
    type: "SortByDate"
})

export const setStartDate = (startDate = undefined) => ({
    type: "SetStartDate",
    update: { startDate }
})

export const setEndDate = (endDate = undefined) => ({
    type: "SetEndDate",
    update: { endDate }
})