import React, {Component, Fragment} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Whitelogo from "../../Asset/image/navlogo.svg";
import ScrollLogo from "../../Asset/image/navlogoScroll.svg";
import '../../Asset/css/custom.css';
import '../../Asset/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {

    constructor() {
        super();
        this.state={
            navBarTitle:"NavBarTitle",
            whiteLogo:[Whitelogo],
            navVariant:"dark",
            navBackGroundColor:"NavBackground",
            navItems:"NavbarItems",
            title:"title"


        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    onScroll=()=>{
     if (window.scrollY>100){
        this.setState({navBarTitle: 'NavbarTitleScroll',navVariant:'light', whiteLogo:[ScrollLogo],navBackGroundColor:'NavBackgroundScroll'
        ,navItems:"NavbarItemsScroll"})
     }
     else if (window.scrollY<100){

         this.setState({navVariant:'dark', navBarTitle: 'NavbarTitle',whiteLogo:[Whitelogo],navBackGroundColor:'NavBackground'
             ,navItems:"NavbarItems"})

     }
    }

    render() {
        return (
            <Fragment>
                <title>{this.props.title}</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBackGroundColor} fixed={"top"} collapseOnSelect expand="lg" >
                    <Navbar.Brand className={this.state.navBarTitle} ><img src={this.state.whiteLogo}/> Khalid Saif</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={this.state.navItems}>
                        <Nav className="mr-auto">

                        </Nav>


                        <Nav>
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link> <NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/courses">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItems} to="/about">ABOUT</NavLink></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;
