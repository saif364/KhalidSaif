import React, {Component, Fragment} from 'react';
import TopNavigation from "../../components/topNavigation/TopNavigation";
import PageTop from "../../components/PageTop/PageTop";
import AllCourses from "../../components/AllCourses/AllCourses";
import Footer from "../../components/Footer/Footer";

class AllCoursePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="All Courses">

                </TopNavigation>
                <PageTop pageTitle="All Courses">

                </PageTop>
                <AllCourses>

                </AllCourses>
                <Footer>

                </Footer>
            </Fragment>
        );
    }
}

export default AllCoursePage;
