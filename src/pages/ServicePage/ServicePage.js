import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/topNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import Services from "../../components/services/Services";
import Footer from "../../components/Footer/Footer";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Service">

                </TopNavigation>
                <PageTop pageTitle="Services">

                </PageTop>
                <Services>

                </Services>
                <Footer>

                </Footer>

            </Fragment>
        );
    }
}

export default ServicePage;
