import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage";
import ServicePage from "../pages/ServicePage/ServicePage";
import AllCoursePage from "../pages/AllCoursesPage/AllCoursePage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import ContactSectionPage from "../pages/ContactSectionPage/ContactSectionPage";
import AboutPage from "../pages/AboutPage/AboutPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}>

                    </Route>
                    <Route exact path="/service" component={ServicePage}>

                    </Route>
                    <Route exact path="/courses" component={AllCoursePage}>

                    </Route>
                    <Route exact path="/portfolio" component={PortfolioPage}>

                    </Route>
                    <Route exact path="/contact" component={ContactSectionPage}>

                    </Route>
                    <Route exact path="/about" component={AboutPage}>

                    </Route>

                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
