import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/topNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import AboutDescription from "../../components/AboutDescription/AboutDescription";
import Footer from "../../components/Footer/Footer";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="About"> </TopNavigation>
            <PageTop pageTitle="About Me"> </PageTop>
                <AboutDescription>

                </AboutDescription>
                <Footer>

                </Footer>

            </Fragment>
        );
    }
}

export default AboutPage;
