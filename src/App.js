import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./routes/HomePage";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailsPage from "./routes/RestaurantDetailsPage";
import {RestaurantsContextProvider} from "./context/RestaurantsContext";

const App = () => {
    return (
        <RestaurantsContextProvider>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
                        <Route exact path="/restaurants/:id" component={RestaurantDetailsPage}/>
                    </Switch>
                </Router>
            </div>
        </RestaurantsContextProvider>

    );
}

export default App;
