import moment from "moment"

const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case "FilterSet":
            return { ...state, ...action.update }
        case "SortByAmount":
            return { ...state, sortBy: "amount" }
        case "SortByDate":
            return { ...state, sortBy: "date" }
        case "SetStartDate":
            return { ...state, ...action.update }
        case "SetEndDate":
            return { ...state, ...action.update }
        default:
            return state;
    }
}

export default filterReducer