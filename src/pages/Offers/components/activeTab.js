import React, { useEffect, useState , useContext } from "react";

//Import Action to copy breadcrumb items from local state to redux state
import { TabPane } from "reactstrap";
import { Button } from "semantic-ui-react";
import OfferIcon from "../../../assets/images/offerPage/Offer-ic.svg";
import OfferImg from "../../../assets/images/car.jpeg";
import { Icon } from "semantic-ui-react";
import moment from 'moment';
import {
  _deleteOffers
} from "../../../services/offersRequests";
import StateContext from "../../../component/context/stateContext";
import SweetAlert from "react-bootstrap-sweetalert";

const ActiveTab = ({ activeData  , update}) => {
  const { setShowModal, setUpdateRequests } = useContext(StateContext);
  const [state, setState] = useState({
    success_confirm : false,
    alert_confirm : false,
    dynamic_title: "",
		dynamic_description: "",
    
    loading: false,
  });


  // const { setShowModal } = useContext(StateContext);
  const [brands, setBrands] = useState([]);
  const [services, setServices] = useState([]);
  const [updateNow, setUpdateNow] = useState(update);
   
  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    
    const serviceProviderId = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );

   
  
    return () => {
      isMounted = false;
    };
  }, [updateNow, update]);
  const handleOnClickDeleteOffer = (offerId) => {
    
    // setUpdateNow("");
   
    _deleteOffers(offerId).then((res) => {

        if (res.success) {
          // setUpdateNow("brand");
          // alert("are you Sure")

          console.log("OfferId" , offerId);

            setState({
              success_confirm: true,
              alert_confirm : false,
              dynamic_title: "Deleted!",
              dynamic_description: "Your Offer has been deleted."
              });

              // 
              // setShowModal({ modalName: "success", data: null });
              
              window.location.reload(); 

          }
      });
    
  };

  console.log("ActiveData" ,activeData )

  return (
    <TabPane tabId="active" className="p-5"> 

      {activeData.length === 0 && ( 
        <div className="empty-offers">
          <div className="empty-text">
            <img src={OfferIcon} alt="Offers Icon" />
            <p>You don't have any submitted offers</p>
          </div>
        </div>
      )}

      {activeData.length > 0 && (
        <div className="offers-contents">
          <ul>
            {activeData.map((offer, i) => (
              <li key={i}>
                <div className="content-card">
                  <div className="left-side">
                    <div className="content-img">
                      <img src={offer.OFFER_IMAGE} width="100" alt="Offer image" />
                    </div>
                    <div className="content-card-text">
                      <p>{offer.OFFER_NAME}</p>
                      <p className="offers-desc-text">
                      {offer.OFFER_NAME}
                      </p>

                      <p className="discount-text">Discount {offer.DISCOUNT_PERCENTAGE} %</p>
                     
                      <p className="offers-desc-text">{offer.SERVICE_PROVIDERS_SERVICES_NAME[0].SERVICE_PROVIDERS_SERVICES_NAME} </p>
                      <div className="offers-validity">

                        <p>Valid till {moment(offer.VALID_TILL).format('MM-DD-YYYY')}</p>
                        
                        <div className="offers-actions">
                          {/* <Button content="Edit" icon="pencil" /> */}

                          <Button
                             content="Delete"
                              icon="trash"
                              onClick={() => setState({ alert_confirm: true })}
                            />


                        </div>
                        {state.alert_confirm ? (
                                                    <SweetAlert
                                                    title="Are you sure?"
                                                    warning
                                                    showCancel
                                                    confirmBtnBsStyle="success"
                                                    cancelBtnBsStyle="danger"
                                                    onConfirm={() =>
                                                      handleOnClickDeleteOffer(
                           
                                                        offer.OFFER_ID
                                                        )
                                                        

                                                    }
                                                    onCancel={() =>
                                                        setState({
                                                            alert_confirm: false,
                                                        })
                                                    }
                                                    >
                                                    Your Offer will be inactive mode!
                                                    </SweetAlert>
                                                ) : null}

                      </div>
                    </div>
                  </div>

                  <div className="right-side">
                    <div className="offer-type-text">
                      <p>{offer.OFFER_TYPE_NAME}</p>
                    </div>
                    <div className="offer-tracks-container">
                      <div className="offer-tracks-content">
                        <p>Views</p>
                        <p>1</p>
                      </div>
                      <div className="offer-tracks-content">
                        <p>Ordered</p>
                        <p>0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}

          </ul>
        </div>
      )}
    </TabPane>
  );
};

export default ActiveTab;