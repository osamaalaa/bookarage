import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { Col, Row } from "reactstrap";
import AuthService from "../../services/auth.service";
import AccountSideMenu from "./components/accountSideMenu";
import AccountInfoTab from "./components/accountTab";
import PaymentTab from "./components/paymentTab";
import "../../assets/css/account.css";
//import StateContext from "../../component/context/stateContext";
const MyAccount = (props) => {
  const [tabs, setTabs] = useState("account");
  //const { loading } = useContext(StateContext);
  const [currentUser, setCurrentUser] = useState("");
  const [state, setState] = useState({
    breadcrumbItems: [
      { title: "Bookarage", link: "#" },
      { title: "Pages", link: "#" },
      { title: "MyAccount", link: "/my-account" },
    ],
  });

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    props.setBreadcrumbItems("MyAccount", state.breadcrumbItems);
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      // setState({
      //   ...state,
      //   currentUser: user,
      //   // showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
      //   // showAdminBoard: user.roles.includes("ROLE_ADMIN")
      // });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <React.Fragment>
      <div className="my-account-container">
        <Row>
          <Col xs="3">
            <AccountSideMenu tab={(value) => setTabs(value)} />
          </Col>

          <Col lg="6">
            {tabs === "account" && (
              <AccountInfoTab showTab={tabs} accountInfo={currentUser} />
            )}

            {tabs === "payment" && (
              <PaymentTab showTab={tabs} paymentInfo={currentUser} />
            )}
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default connect(null, { setBreadcrumbItems })(MyAccount);
