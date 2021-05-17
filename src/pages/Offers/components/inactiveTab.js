import React ,{useState}from "react";

//Import Action to copy breadcrumb items from local state to redux state
import { TabPane } from "reactstrap";
import OfferIcon from "../../../assets/images/offerPage/Offer-ic.svg";
import moment from 'moment'
import { Button , Checkbox } from 'semantic-ui-react'
import {
  _deleteInActiveOffers , _UpdateOfferToActiveMode
} from "../../../services/offersRequests";
import SweetAlert from "react-bootstrap-sweetalert";

const InactiveTab = ({ inActiveData }) => {
  const [state, setState] = useState({
    success_confirm : false,
    alert_confirm : false,
    dynamic_title: "",
    dynamic_description: "",
    
    loading: false,
  });
  console.log("In Active Data" , inActiveData)
  const handleOnClickDeleteInActiveOffer = (offerId) => {
    
    // setUpdateNow("");
 
   
    _deleteInActiveOffers(offerId).then((res) => {
      if (res.success) {
        // setUpdateNow("brand");
        // alert("are you Sure")
        setState({
          success_confirm: true,
          alert_confirm : false,
          dynamic_title: "Deleted!",
          dynamic_description: "Your Offer has been deleted."
          })
        // 
        // setShowModal({ modalName: "success", data: null });
        window.location.reload();
      }
    });
    
  };


  const  handleActivateChange = (evt, data , offerId) => {
    let checked = data.checked
    
    console.log(checked)
    if(checked === true) {
      _UpdateOfferToActiveMode(offerId).then((res) => {
        if (res.success) {
          // setUpdateNow("brand");
          // alert("are you Sure")
        
          // 
          // setShowModal({ modalName: "success", data: null });
          window.location.reload();
        }
      });
    }
  }

  return (
    <TabPane tabId="Inactive" className="p-5">
      {inActiveData.length === 0 && (
        <div className="empty-offers">
          <div className="empty-text">
            <img src={OfferIcon} alt="Offers Icon" /> 
            <p>You don't have any inactive offers</p>
          </div>
        </div>
      )}

      {inActiveData.length > 0 && (
        <div className="offers-contents">
          <ul>
            {inActiveData.map((offer, i) => (
              <li key={i}>
                <div className="content-card">
                  <div className="left-side">
                    <div className="content-img">
                      <img src={offer.OFFER_IMAGE} width="100" alt="Offer image" />
                    </div>
                    <div className="content-card-text">
                      <p>{offer.OFFER_NAME}</p>
                      <p className="offers-desc-text">
                        {offer.PROVIDER_DESCRIPTION}
                      </p>
                      <p className="offers-desc-text">{offer.SERVICE_PROVIDERS_SERVICES_NAME} </p>
                      <p className="discount-text">Discount {offer.DISCOUNT_PERCENTAGE}%</p>
                      <div className="offers-validity">
                        <p>Valid till {moment(offer.VALID_TILL).format('MM-DD-YYYY')}</p>
                        <div className="offers-actions">
                          {/* <Button content="Edit" icon="pencil" /> */}
                          <Button content="Delete" icon="trash"  onClick={() => setState({ alert_confirm: true })} />
                        </div>
                        <div className="list-action">
        
                          <Checkbox  toggle label='Activate Offer?' 
                                    onClick={(evt, data)=> handleActivateChange(evt, data , offer.OFFER_ID)} />
                        </div>
                       
                        {state.alert_confirm ? (
                                                    <SweetAlert
                                                    title="Are you sure?"
                                                    warning
                                                    showCancel
                                                    confirmBtnBsStyle="success"
                                                    cancelBtnBsStyle="danger"
                                                    onConfirm={() =>
                                                      handleOnClickDeleteInActiveOffer(
                           
                                                        offer.OFFER_ID
                                                        )
                                                        

                                                    }
                                                    onCancel={() =>
                                                        setState({
                                                            alert_confirm: false,
                                                        })
                                                    }
                                                    >
                                                    You won't be able to revert this!
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

export default InactiveTab;