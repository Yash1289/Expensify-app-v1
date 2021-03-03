const React = require("react");
import { BrowserRouter, Route, Switch, Link , NavLink } from "react-router-dom"

import CreateExpensePage from "../components/CreateExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import Header from "../components/Header"
import Help from "../components/Help"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import NotFound from "../components/NotFound"

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={CreateExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;