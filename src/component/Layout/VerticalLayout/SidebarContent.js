import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { toggleSidebar,
    hideRightSidebar,
    changeTopbarTheme,
    changeLayout,
    changeSidebarTheme,
    changeLayoutWidth,
    changeSidebarType,
    changePreloader } from '../../../store/actions';

// MetisMenu
import MetisMenu from "metismenujs";

import AuthService from "../../../services/auth.service";



class SidebarContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_toggle: false,
            layoutType: this.props.layoutType,
            topbarTheme: this.props.topbarTheme,
            leftSideBarTheme: this.props.leftSideBarTheme,
            layoutWidth: this.props.layoutWidth,
            sidebarType: this.props.leftSideBarType,
            isPreloader: this.props.isPreloader
        }
        this.changeLayout = this.changeLayout.bind(this);
        this.changeTopbarTheme = this.changeTopbarTheme.bind(this);
        this.changeLeftSidebarTheme = this.changeLeftSidebarTheme.bind(this);
        this.changeLayoutWidth = this.changeLayoutWidth.bind(this);
        this.changeLeftSidebarType = this.changeLeftSidebarType.bind(this);
        this.changeThemePreloader = this.changeThemePreloader.bind(this);
    }

    componentDidMount() {
        document.body.setAttribute('data-sidebar','dark');
        this.initMenu();
        const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    }

        //update local state after changing layout
        componentDidUpdate(prevProps) {
            if (prevProps !== this.props) {
              this.setState({
                layoutType: this.props.layoutType,
                topbarTheme: this.props.topbarTheme,
                leftSideBarTheme: this.props.leftSideBarTheme,
                layoutWidth: this.props.layoutWidth,
                sidebarType: this.props.leftSideBarType,
                isPreloader: this.props.isPreloader
              });
            }

            if (this.props.leftSideBarType !== prevProps.leftSideBarType) {
                this.initMenu();
            }
        }

    initMenu() {
        new MetisMenu("#side-menu");
    
          var matchingMenuItem = null;
          var ul = document.getElementById("side-menu");
          var items = ul.getElementsByTagName("a");
          for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
              matchingMenuItem = items[i];
              break;
            }
          }
          if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
          }
        
    }

    activateParentDropdown = (item) => {

        item.classList.add('mm-active');
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add('mm-active'); // li 
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");
              
                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add('mm-active'); // li
                    parent3.childNodes[0].classList.add('mm-active'); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add('mm-active');
                    }
                }
            }
            return false;
        }
        return false;
    }
            //change layput type and dispatch action
            changeLayout() {
                this.props.changeLayout("horizontal");
            }
        
            //theme preloader
            changeThemePreloader = (value) => {
                this.props.changePreloader(!this.props.isPreloader);
            }
        
            //change left sidebar theme
            changeLeftSidebarTheme(value) {
                  this.props.changeSidebarTheme(value);
            }
        
            //change layout width
            changeLayoutWidth(value) {
                if(this.state.layoutWidth === "boxed")
                  this.props.changeLayoutWidth("fluid", this.state.layoutType);
                else
                this.props.changeLayoutWidth("boxed", this.state.layoutType);
            }
        
            //change topbar theme and dispatch action
            changeTopbarTheme(value) {
                  this.props.changeTopbarTheme(value);
            }
        
            //change sidebar type
            changeLeftSidebarType(value) {
                  this.props.changeSidebarType(value);
            }

    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        return (
            <React.Fragment>
                <div id="sidebar-menu">
    
    <ul className="metismenu list-unstyled" id="side-menu">
        <li className="menu-title">Main</li>
        <li>
            <Link to="/dashboard" className="waves-effect">
                <i className="mdi mdi-view-dashboard"></i><span className="badge badge-pill badge-primary float-right">2</span>
                <span>Dashboard</span>
            </Link>
        </li>
    
        <li>
            <Link to="calendar" className=" waves-effect">
                <i className="mdi mdi-calendar-check"></i>
                <span>Calendar</span>
            </Link>
        </li>
    
        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-email-outline"></i>
                <span>Email</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="email-inbox">Inbox</Link></li>
                <li><Link to="email-read">Email Read</Link></li>
                <li><Link to="email-compose">Email Compose</Link></li>
            </ul>
        </li>

        <li className="menu-title">Components</li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-buffer"></i>
                <span>UI Elements</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                    <li><Link to="ui-alerts">Alerts</Link></li>
                    <li><Link to="ui-buttons">Buttons</Link></li>
                    <li><Link to="ui-badge">Badge</Link></li>
                    <li><Link to="ui-cards">Cards</Link></li>
                    <li><Link to="ui-carousel">Carousel</Link></li>
                    <li><Link to="ui-dropdowns">Dropdowns</Link></li>
                    <li><Link to="ui-grid">Grid</Link></li>
                    <li><Link to="ui-images">Images</Link></li>
                    <li><Link to="ui-lightbox">Lightbox</Link></li>
                    <li><Link to="ui-modals">Modals</Link></li>
                    <li><Link to="ui-pagination">Pagination</Link></li>
                    <li><Link to="ui-popover-tooltips">Popover &amp; Tooltips</Link></li>
                    <li><Link to="ui-rangeslider">Range Slider</Link></li>
                    <li><Link to="ui-session-timeout">Session Timeout</Link></li>
                    <li><Link to="ui-progressbars">Progress Bars</Link></li>
                    <li><Link to="ui-sweet-alert">Sweet-Alert</Link></li>
                    <li><Link to="ui-tabs-accordions">Tabs &amp; Accordions</Link></li>
                    <li><Link to="ui-typography">Typography</Link></li>
                    <li><Link to="ui-video">Video</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="waves-effect">
                <i className="mdi mdi-clipboard-outline"></i>
                <span className="badge badge-pill badge-success float-right">6</span>
                <span>Forms</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="form-elements">Form Elements</Link></li>
                <li><Link to="form-validation">Form Validation</Link></li>
                <li><Link to="form-advanced">Form Advanced</Link></li>
                <li><Link to="form-editors">Form Editors</Link></li>
                <li><Link to="form-uploads">Form File Upload</Link></li>
                <li><Link to="form-xeditable">Form Xeditable</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-chart-line"></i>
                <span>Charts</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="charts-appex">Appex Chart</Link></li>
                <li><Link to="charts-chartist">Chartist Chart</Link></li>
                <li><Link to="charts-chartjs">Chartjs Chart</Link></li>
                <li><Link to="charts-sparkline">Sparkline Chart</Link></li>
                <li><Link to="charts-c3">C3 Chart</Link></li>
                <li><Link to="charts-other">Jquery Knob Chart</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-format-list-bulleted-type"></i>
                <span>Tables</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="tables-basic">Basic Tables</Link></li>
                <li><Link to="tables-datatable">Data Table</Link></li>
                <li><Link to="tables-responsive">Responsive Table</Link></li>
                <li><Link to="tables-editable">Editable Table</Link></li>
            </ul>
        </li>



        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-album"></i>
                <span>Icons</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="icons-material">Material Design</Link></li>
                <li><Link to="icons-ion">Ion Icons</Link></li>
                <li><Link to="icons-fontawesome">Font Awesome</Link></li>
                <li><Link to="icons-themify">Themify Icons</Link></li>
                <li><Link to="icons-dripicons">Dripicons</Link></li>
                <li><Link to="icons-typicons">Typicons Icons</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="waves-effect">
                <span className="badge badge-pill badge-danger float-right">2</span>
                <i className="mdi mdi-google-maps"></i>
                <span>Maps</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="maps-google"> Google Map</Link></li>
                <li><Link to="maps-vector"> Vector Map</Link></li>
            </ul>
        </li>

        <li className="menu-title">Extras</li>
        <li>
            <Link to="#" className="has-arrow waves-effect">
                <i className="mdi mdi-responsive"></i>
                    <span> Layouts </span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="#" onClick = { this.changeLayout }>Horizontal</Link></li>
                <li><Link to="#" className={this.props.leftSideBarTheme === "light" ? "mm-active" : ""} onClick = { () => this.changeLeftSidebarTheme("light") }>Light Sidebar</Link></li>
                <li><Link to="#"className={this.props.leftSideBarTheme === "dark" ? "mm-active" : ""}  onClick = { () => this.changeLeftSidebarTheme("dark") }>Dark Sidebar</Link></li>
                <li><Link to="#"className={this.props.leftSideBarTheme === "colored" ? "mm-active" : ""}  onClick = { () => this.changeLeftSidebarTheme("colored") }>Colored Sidebar</Link></li>
                <li><Link to="#" className={this.props.sidebarType === "default" ? "mm-active" : ""} onClick = { () => this.changeLeftSidebarType("default") }>Default Sidebar</Link></li>
                <li><Link to="#" className={this.props.sidebarType === "compact" ? "mm-active" : ""} onClick = { () => this.changeLeftSidebarType("compact") }>Compact Sidebar</Link></li>
                <li><Link to="#" className={this.props.sidebarType === "icon" ? "mm-active" : ""} onClick = { () => this.changeLeftSidebarType("icon") }>Icon Sidebar</Link></li>
                <li><Link to="#" className={this.props.layoutWidth === "boxed" ? "mm-active" : ""} onClick = { this.changeLayoutWidth }>{this.props.layoutWidth !== "fluid" ? "Fluid Layout" : "Boxed Layout"}</Link></li>
                <li><Link to="#"  onClick = { this.changeThemePreloader }>{this.props.isPreloader === true ? "Without Preloader" : "Preloader"}</Link></li>
                
            </ul>
        </li>
        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-account-box"></i>
                <span> Authentication </span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/ForgetPassword">Recover Password</Link></li>
                <li><Link to="pages-lock-screen">Lock Screen</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-google-pages"></i>
                <span> Extra Pages </span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li><Link to="pages-timeline">Timeline</Link></li>
                <li><Link to="pages-invoice">Invoice</Link></li>
                <li><Link to="pages-directory">Directory</Link></li>
                <li><Link to="pages-blank">Blank Page</Link></li>
                <li><Link to="pages-404">Error 404</Link></li>
                <li><Link to="pages-500">Error 500</Link></li>
            </ul>
        </li>

        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-share-variant"></i>
                <span>Multi Level</span>
            </Link>
            <ul className="sub-menu" aria-expanded="true">
                <li><Link to="/#">Level 1.1</Link></li>
                <li><Link to="/#" className="has-arrow">Level 1.2</Link>
                    <ul className="sub-menu" aria-expanded="true">
                        <li><Link to="/#">Level 2.1</Link></li>
                        <li><Link to="/#">Level 2.2</Link></li>
                    </ul>
                </li>
            </ul>
        </li>

    </ul>
</div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { is_toggle, leftSideBarType, layoutType, leftSideBarTheme, layoutWidth, topbarTheme, isPreloader } = state.Layout;
    return {  is_toggle, leftSideBarType, layoutType, leftSideBarTheme, layoutWidth, topbarTheme, isPreloader };
}

export default withRouter(connect(mapStatetoProps, {
    toggleSidebar,
    hideRightSidebar,
    changeLayout,
    changeTopbarTheme,
    changeSidebarTheme,
    changeLayoutWidth,
    changeSidebarType,
    changePreloader
})(SidebarContent));
