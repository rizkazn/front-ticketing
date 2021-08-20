import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./Pages/Home/Home.jsx"

function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers