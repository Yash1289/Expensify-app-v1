const React = require("react");
import { Link , NavLink} from "react-router-dom"

const Header = () => (
    <div>
        <h1>Expensify App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <br></br>
        <NavLink to="/create" activeClassName = "is-active">Create</NavLink>
        <br></br>
        <NavLink to="/help" activeClassName = "is-active">Help</NavLink>
    </div>
)

export default Header;