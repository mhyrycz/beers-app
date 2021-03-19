import { FC } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import BeersList from "../components/BeersList"
import BeerDetails from "../components/BeerDetails"

const AppRouter: FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={BeersList} exact={true} />
            <Route path="/:id" component={BeerDetails} exact={true} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter
