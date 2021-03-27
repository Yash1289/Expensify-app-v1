import React from "react"
import { connect } from "react-redux"
import { setTextFilter , sortByDate , sortByAmount , setStartDate , setEndDate } from "../actions/filter"
import { DateRangePicker } from "react-dates"

export class ExpensesListFilter extends React.Component{
    state = {
        calendarFocused : null
    }
    onDatesChange = ({ startDate , endDate}) => {
        this.props.SetStartDate(startDate)
        this.props.SetEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }
    onTextChange = (e) => {
        this.props.SetTextFilter(e.target.value)
    }
    onSortByChange = (e) => {
        console.log(e.target.value)
        if (e.target.value === "date") {
            this.props.SortByDate()
        }
        else if (e.target.value === "amount") {
            this.props.SortByAmount()
        }
    }
   render(){
       return (
           <div className="content-container">
                <div className="input-group">
                   <div className="input-group__item hello">
                       <input className="text-input" type="text" placeholder="Search Expenses" value={this.props.filter.text} onChange={this.onTextChange} />
                   </div>
                   <div className="input-group__item">
                       <select className="select" value={this.props.filter.sortBy} onChange={this.onSortByChange}>
                           <option value="date">Date</option>
                           <option value="amount">Amount</option>
                       </select>
                   </div>
                   <div className="input-group__item">
                       <DateRangePicker
                           startDate={this.props.filter.startDate}
                           endDate={this.props.filter.endDate}
                           onDatesChange={this.onDatesChange}
                           focusedInput={this.state.calendarFocused}
                           onFocusChange={this.onFocusChange}
                           showClearDates={true}
                           numberOfMonths={1}
                           isOutsideRange={() => false}
                       />
                   </div>
                </div> 
           </div>
       )
   }
}

const mapStateToProps = (state) => {
    return{
        filter : state.filter
    }
}

const mapDispatchToProps = (dispatch , props) => {
    return {
        SetStartDate : (startDate) => dispatch(setStartDate(startDate)),
        SetEndDate : (endDate) => dispatch(setEndDate(endDate)),
        SetTextFilter : (text) => dispatch(setTextFilter(text)) , 
        SortByDate : () => dispatch(sortByDate()) ,
        SortByAmount : () => dispatch(sortByAmount())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(ExpensesListFilter)