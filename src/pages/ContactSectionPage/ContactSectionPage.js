import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/topNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";

class ContactSectionPage extends Component {
    render() {
        return (
            <Fragment>

                <TopNavigation title="Contact">

                </TopNavigation>
                <PageTop pageTitle="Contact Us">

                </PageTop>

                <ContactSection>

                </ContactSection>

                <Footer>

                </Footer>
            </Fragment>
        );
    }
}

export default ContactSectionPage;
