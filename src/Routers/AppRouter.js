const React = require("react");
import { Router, Route, Switch, Link , NavLink } from "react-router-dom"

import CreateExpensePage from "../components/CreateExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import LoginPage from "../components/LoginPage"
import NotFound from "../components/NotFound"
import {createBrowserHistory} from "history"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

import PropTypes from 'prop-types';

 Route.propTypes.component = PropTypes.oneOfType([
    Route.propTypes.component,
    PropTypes.object,
]);

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
          
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={CreateExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;