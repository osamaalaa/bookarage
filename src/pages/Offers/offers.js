import React, { Component, useContext, useEffect, useState } from "react";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { Container, Row, Col, Button, TabContent } from "reactstrap";
import addIcon from "../../assets/images/offerPage/add-ic.svg";
import OffersNavItems from "./components/offersNavItems";
import ActiveTab from "./components/activeTab";
import InactiveTab from "./components/inactiveTab";
import CreateOfferModal from "./components/createOfferModal";
import StateContext from "../../component/context/stateContext";
import "../../assets/css/offers.css";
import { _getOffersByProviderID  , _getInActiveOffersByProviderID} from "../../services/offersRequests";
import { useHistory } from "react-router";

const Offers = (props) => {
  const [state, setState] = useState({
    breadcrumbItems: [
      { title: "Bookarage", link: "#" },
      { title: "Pages", link: "#" },
      { title: "Offers", link: "/offers" },
    ],
    visible: false,
    modal_center: false,
    activeTab: "active",
  });
  const [activeOffers, setActiveOffers] = useState([])
  const [inactiveOffers, setInactiveOffers] = useState([])
  const history = useHistory()
  const { setShowModal, updateRequests } = useContext(StateContext);

  useEffect(() => {
    let isMounted = true;
    if (!isMounted && updateRequests !== 'offers') return
    props.setBreadcrumbItems("Offers", state.breadcrumbItems);
    // const { setShowModal } = useContext(StateContext);
    const providerID = JSON.parse(localStorage.getItem('serviceProviderData') || '[]')

    _getOffersByProviderID(providerID.SERVICE_PROVIDER_ID).then(res => {
      
      if (!res.success) {
        if (res.error === 'token') {
          history.push('/login')
          return
        }
        return
      }
      let activeData = [];
      let inActiveData = []; 

      res.result.map(offer => {
        activeData.push(offer)
        // if (offer.AVAILABILITY === 1) {
        //   activeData.push(offer)
        // } else {
        //   // inActiveData.push(offer)
        // }
      })
      setActiveOffers(activeData)

      console.log("Active Offers" , res)
      // setInactiveOffers(inActiveData)
    })

    _getInActiveOffersByProviderID(providerID.SERVICE_PROVIDER_ID).then(res => {
      
      if (!res.success) {
        if (res.error === 'token') {
          history.push('/login')
          return
        }
        return
      }
      let activeData = []
      let inActiveData = [] 

      res.result.map(offer => {
        if (offer.AVAILABILITY === 1) {
          inActiveData.push(offer)
        } else {
          inActiveData.push(offer)
        }
      })
      // setActiveOffers(activeData)
      setInactiveOffers(inActiveData)
    })



    return () => {
      isMounted = false;
    };
  }, [updateRequests]);




  const handleOnClickCreate = () => {

    setShowModal({ modalName: "createOffer", data: null });

  };

  return (
    <React.Fragment>
      <CreateOfferModal />

      <Container>
        <div className="offers-nav-container">
          <p>Offers</p>
          <Row>
            <Col lg="6" md="6" sm="6" xs="6">
              <OffersNavItems
                tabs={(value) => setState({ ...state, activeTab: value })}
                activeTab={state.activeTab}
              />
            </Col>
            <Col lg="6" md="6" sm="6" xs="6">
              <div className="create-action-container">
                <Button
                  type="button"
                  color="primary"
                  onClick={handleOnClickCreate}
                  className="waves-effect waves-light"
                >
                  {" "}
                  <img src={addIcon} alt="" height="10" /> Create Offer
                </Button>
              </div>
            </Col>
          </Row>
        </div>

        <div className="offers-content">
          <TabContent activeTab={state.activeTab}>
            <ActiveTab activeData={activeOffers} />
            <InactiveTab inActiveData={inactiveOffers} />
          </TabContent>
        </div>
        {/* <Row>
          <Col xs="6"></Col>
          <Col xs="6" sm="4"></Col>
        </Row> */}
      </Container>
    </React.Fragment>
  );
};

export default connect(null, { setBreadcrumbItems })(Offers);