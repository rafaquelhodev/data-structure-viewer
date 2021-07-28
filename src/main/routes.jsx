import LinkedList from "../components/LinkedList"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default props => (
    <Router>
        <Switch>
            <Route path="/linkedList" exact={true} component={LinkedList} />
        </Switch>
    </ Router>
)