import moment from "moment"

const filters = {
    text : "" ,
    startDate : undefined , 
    endDate : undefined, 
    sortBy : "date"
}

const altFilters = { 
    text : "Coff" ,
    sortBy : "amount" , 
    startDate : moment(0).add(3 , "days") ,
    endDate : moment(0).add(5, "days")
}

export {filters , altFilters } 