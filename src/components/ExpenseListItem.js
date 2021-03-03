import React from "react";
import {expenseRemover} from "../actions/expenses"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux";

const ExpenseListItem = ({  id , description , amount, createdAt}) => (
    <div>
        <NavLink to={`/edit/${id}`} ><h3>{description}</h3></NavLink>
        <p>{amount} - {createdAt}</p>
    </div>
)



export default ExpenseListItem ;