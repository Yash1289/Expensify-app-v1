const React = require("react");
import { Link , NavLink} from "react-router-dom"

const Header = () => (
    <div>
        <h1>Expensify App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName = "is-active">Create</NavLink>
    </div>
)

export default Header;