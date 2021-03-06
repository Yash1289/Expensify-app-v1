import React from "react";
import {expenseRemover} from "../actions/expenses"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import moment from "moment"
const rupeeFormatter = require("rupee-formatter")

const ExpenseListItem = ({  id , description , amount, createdAt}) => (
        <Link className="list-item" to={`/edit/${id}`} >
            <div>
                <h3 className="list-item__title">{description}</h3>
                <span className="list-item__subtitle">{moment(createdAt).format("MMMM DD , YYYY")}</span>
            </div>
            <h3 className="list-item__data">{rupeeFormatter(amount)}</h3>
        </Link>  
)



export default ExpenseListItem ;