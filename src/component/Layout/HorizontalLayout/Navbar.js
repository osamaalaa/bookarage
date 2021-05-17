import React, { Component, Fragment } from "react";
import { Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import dashboardIcon from "../../../assets/images/icons/dashb-ic.svg";
// import inquiresIcon from "../../../assets/images/icons/inquires-ic.svg";
// import messagesIcon from "../../../assets/images/icons/Messages.svg";
// import offersIcon from "../../../assets/images/icons/Offers.svg";
// import requestsIcon from "../../../assets/images/icons/requests-ic.svg";
// import walletIcon from "../../../assets/images/icons/wallet-ic.svg";
// import workshopIcon from "../../../assets/images/icons/workshopmang-ic.svg";
// import myAccountIcon from "../../../assets/images/icons/account-ic.svg";
import {
  changeLayout,
  changeLayoutWidth,
  changePreloader,
} from "../../../store/actions";
import inquires from "../../../assets/images/nav-bar/inquires-ic.svg";
//import requries from "../../../assets/images/nav-bar/requests-ic.svg";
import dashboard from "../../../assets/images/nav-bar/dashb-ic.svg";
import offers from "../../../assets/images/nav-bar/offers-ic.svg";
import messages from "../../../assets/images/nav-bar/messages-ic.svg";
import wallet from "../../../assets/images/nav-bar/wallet-ic.svg";
import managment from "../../../assets/images/nav-bar/workshopmang-ic.svg";
import account from "../../../assets/images/nav-bar/account-ic.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMail: false,
      isUi: false,
      isForms: false,
      isAdmin: false,
      isMore: false,
      isIcons: false,
      isTables: false,
      isMaps: false,
      isCharts: false,
      isPages: false,
      isLayouts: false,
      layoutType: this.props.layoutType,
      layoutWidth: this.props.layoutWidth,
      isPreloader: this.props.isPreloader,
      roleName: "",
    };
    this.changeLayout = this.changeLayout.bind(this);
    this.changeLayoutWidth = this.changeLayoutWidth.bind(this);
    this.changeThemePreloader = this.changeThemePreloader.bind(this);
  }

  changeLayout() {
    this.props.changeLayout("vertical");
  }

  //change layout width
  changeLayoutWidth(value) {
    if (this.state.layoutWidth === "boxed")
      this.props.changeLayoutWidth("fluid", this.state.layoutType);
    else this.props.changeLayoutWidth("boxed", this.state.layoutType);
  }

  //theme preloader
  changeThemePreloader = (value) => {
    this.props.changePreloader(!this.props.isPreloader);
  };

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
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

    const user = JSON.parse(localStorage.getItem("user") || "[]");

    this.setState({ roleName: user.roleName });
  }

  //update local state after changing layout
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        layoutType: this.props.layoutType,
        layoutWidth: this.props.layoutWidth,
        isPreloader: this.props.isPreloader,
      });
    }

    if (this.props.leftSideBarType !== prevProps.leftSideBarType) {
      this.initMenu();
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  };
  user = JSON.parse(localStorage.getItem("user") || "[]");
  serviceprovider = JSON.parse(
    localStorage.getItem("serviceProviderData") || "[]"
  );
  render() {
    return (
      <React.Fragment>
        <div className="">
          <div className="topnav">
            <nav
              className="navbar navbar-light navbar-expand-lg topnav-menu"
              id="navigation"
            >
              <Collapse
                isOpen={this.props.menuOpen}
                className="navbar-collapse justify-content-center"
                id="topnav-menu-content"
              >
                <ul className="navbar-nav container-fluid">
                  {this.state.roleName === "ServiceProvider" && (
                    <Fragment>
                      <li className="nav-item">
                        <Link className="nav-link" to="index">
                          <img src={dashboard} alt="" className="mr-2" />
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/requests">
                          <img src={inquires} alt="" className="mr-2" />
                          <span>Requests</span>
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link className="nav-link" to="/inquires">
                          <img src={requries} alt="" className="mr-2" />
                          <span>Inquires</span>
                        </Link>
                      </li> */}
                      <li className="nav-item">
                        <Link className="nav-link" to="/offers">
                          <img src={offers} alt="" className="mr-2" />
                          <span>Offers</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={`/${this.serviceprovider.SERVICE_PROVIDER_ID}`}
                        >
                          <img src={messages} alt="" className="mr-2" />
                          <span>Messages</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/wallet">
                          <img src={wallet} alt="" className="mr-2" />
                          <span>Wallet</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/managment">
                          <img src={managment} alt="" className="mr-2" />
                          <span>Management</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/my-account">
                          <img src={account} alt="" className="mr-2" />
                          My Account
                        </Link>
                      </li>
                    </Fragment>
                  )}

                  {/* ================================= Admin List =============================== */}
                  {this.state.roleName === "Admin" && (
                    <Fragment>
                      <li className="nav-item">
                        <Link className="nav-link" to="/users-subscription">
                          <img src={account} alt="" className="mr-2" />
                          Subscription Users
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/users">
                          <img src={account} alt="" className="mr-2" />
                          Bookarage Users
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="form-elements">
                          <img src={account} alt="" className="mr-2" />
                          Service Providers
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="form-elements">
                          <img src={account} alt="" className="mr-2" />
                          Insurance Companies
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin-requests">
                          <img src={account} alt="" className="mr-2" />
                          Bookarage Requests
                        </Link>
                      </li>
                    </Fragment>
                    // <li className="nav-item dropdown">
                    //   <Link
                    //     onClick={(e) => {
                    //       e.preventDefault();
                    //       this.setState({ isAdmin: !this.state.isAdmin });
                    //     }}
                    //     className="nav-link dropdown-toggle arrow-none"
                    //     to="/#"
                    //     id="sub-menu-forms"
                    //     role="button"
                    //     data-toggle="dropdown"
                    //     aria-haspopup="true"
                    //   >
                    //     <img src={account} alt="" className="mr-2" /> Admin
                    //     Pages
                    //   </Link>
                    //   <div
                    //     className={
                    //       this.state.isAdmin
                    //         ? "dropdown-menu dropdown-menu-left show"
                    //         : "dropdown-menu dropdown-menu-left"
                    //     }
                    //     aria-labelledby="topnav-forms"
                    //   >
                    //     <Link
                    //       to="/users-subscription"
                    //       className="dropdown-item"
                    //     >
                    //       Subscription Users
                    //     </Link>
                    //     <Link to="/users" className="dropdown-item">
                    //       Bookarage Users
                    //     </Link>
                    //     <Link to="form-elements" className="dropdown-item">
                    //       Service Providers
                    //     </Link>
                    //     <Link to="form-elements" className="dropdown-item">
                    //       Insurance Companies
                    //     </Link>

                    //     <Link to="/admin-requests" className="dropdown-item">
                    //       Bookarage Requests
                    //     </Link>
                    //   </div>
                    // </li>
                  )}
                </ul>
              </Collapse>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStatetoProps = (state) => {
  const {
    is_toggle,
    leftSideBarType,
    layoutType,
    leftSideBarTheme,
    layoutWidth,
    topbarTheme,
    isPreloader,
  } = state.Layout;
  return {
    is_toggle,
    leftSideBarType,
    layoutType,
    leftSideBarTheme,
    layoutWidth,
    topbarTheme,
    isPreloader,
  };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeLayoutWidth,
    changePreloader,
  })(Navbar)
);
