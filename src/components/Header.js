const React = require("react");
import { Link , NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { doLogout } from "../actions/auth"


export const Header = ({ doLogout }) => (
    <div>
        <h1>Expensify App</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName = "is-active">Create</NavLink>
        <button onClick={doLogout}>Logout</button>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout : () => dispatch(doLogout())
    }
}

export default connect(undefined , mapDispatchToProps)(Header)