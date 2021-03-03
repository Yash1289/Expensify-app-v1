import moment from "moment"

const data = [
    {
        description: "Coffee",
        id: 1,
        note: "Friends forced me into buying a coffee for everyonee",
        amount: 120,
        createdAt: 0
    },
    {
        description: "Tea",
        id: 2,
        note: "Everyone drinks it so i drink it too what's the problem",
        amount: 35,
        createdAt: moment(0).add(4, "days").valueOf()
    },
    {
        description: "Tang",
        id: 3,
        note: "It is the season of summer and we must drink refreshing things in it",
        amount: 70,
        createdAt: moment(0).subtract(4, "days").valueOf()
    }
]

export default data ;