import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/topNavigation/TopNavigation";
import Topbanner from "../../components/Topbanner/Topbanner";
import Services from "../../components/services/Services";
import Analysis from "../../components/Analysis/Analysis";
import Summary from "../../components/Summary/Summary";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import Courses from "../../components/Courses/Courses";
import Video from "../../components/Video/Video";
import ClientReview from "../../components/ClientReview/ClientReview";
import Footer from "../../components/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home"> </TopNavigation>
                <Topbanner></Topbanner>
                <Services></Services>
                <Analysis></Analysis>
                <Summary></Summary>
                <RecentProjects></RecentProjects>
                <Courses></Courses>
                <Video></Video>
                <ClientReview></ClientReview>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default HomePage;
