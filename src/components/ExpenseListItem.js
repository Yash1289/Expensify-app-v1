import React from "react";
import {expenseRemover} from "../actions/expenses"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux";
import moment from "moment"
const rupeeFormatter = require("rupee-formatter")

const ExpenseListItem = ({  id , description , amount, createdAt}) => (
    <div>
        <NavLink to={`/edit/${id}`} ><h3>{description}</h3></NavLink>
        <p>
        {rupeeFormatter(amount)} - {moment(createdAt).format("MMMM DD , YYYY")}
        </p>
    </div>
)



export default ExpenseListItem ;