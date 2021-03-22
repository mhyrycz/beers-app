import { FC } from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import BeersList from "../components/BeersList"
import BeerDetails from "../components/BeerDetails"

const AppRouter: FC = () => (
    <Router>
        <Switch>
            <Route path="/" component={BeersList} exact={true} />
            <Route path="/:id" component={BeerDetails} exact={true} />
        </Switch>
    </Router>
)

export default AppRouter
