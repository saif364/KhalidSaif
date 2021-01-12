import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/topNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import Footer from "../../components/Footer/Footer";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import AllProjects from "../../components/AllProjects";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>

                <TopNavigation title="Portfolio">

                </TopNavigation>
                <PageTop pageTitle="PortFolio ">

                </PageTop>

                <AllProjects></AllProjects>

                <Footer></Footer>

            </Fragment>
        );
    }
}

export default PortfolioPage;
