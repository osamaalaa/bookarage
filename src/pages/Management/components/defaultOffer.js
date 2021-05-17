import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { Icon } from "semantic-ui-react";
import StateContext from "../../../component/context/stateContext";
import {
  _deleteBrand,
  _getAllBrandsByServiceProviderId,
  _getServicesByProviderId,
  _deleteService
} from "../../../services/managementRequests";
import SweetAlert from "react-bootstrap-sweetalert";
const ServiceAndPartsComponent = ({ update }) => {
  const { setShowModal } = useContext(StateContext);
  const [brands, setBrands] = useState([]);
  const [services, setServices] = useState([]);
  const [updateNow, setUpdateNow] = useState(update);
  const [state, setState] = useState({
    
    
    success_confirm : false,
    alert_confirm : false,
    dynamic_title: "",
		dynamic_description: "",

    success_confirm_brand : false,
    alert_confirm_brand : false,
    dynamic_title_brand: "",
		dynamic_description_brand: "",

  });
  const handleOnClick = (type) => {
    setShowModal({ modalName: type, data: null }); 
  };

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    
    const serviceProviderId = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );

    
    if (update === "brand" || updateNow === "brand" || update === "") {
      _getAllBrandsByServiceProviderId(
        serviceProviderId.SERVICE_PROVIDER_ID
      ).then((res) => {
       console.log("brands" , res)
        setBrands(res.result);
      });
    }
    
    _getServicesByProviderId(serviceProviderId.SERVICE_PROVIDER_ID).then(
      (res) => {
        if (res.success) {
          setServices(res.result.services);
        }
      }
    );
    return () => { 
      isMounted = false;
    };
  }, [updateNow, update]);

  const handleOnClickDeleteBrand = (providerId, brandId) => {
    setUpdateNow("");
    
    _deleteBrand(brandId).then((res) => {
      if (res.success) {
        setUpdateNow("brand");
        setState({
          success_confirm_brand: true,
          alert_confirm_brand : false,
          dynamic_title_brand: "Deleted!",
          dynamic_description_brand: "Your file has been deleted."
          })
      }
    });
  };

  const handleOnClickDeleteService = (serviceId) => {
    setUpdateNow("");
     
    _deleteService(serviceId).then((res) => {
      if (res.success) {
        setUpdateNow("brand");
        setState({
          success_confirm: true,
          alert_confirm : false,
          dynamic_title: "Deleted!",
          dynamic_description: "Your file has been deleted."
          })
      }
    
    });
  };


  return (
    <div className="serviceParts-container">
     
      <div className="page-title">
        <p>Default Normal Offer</p>
       
      </div>

      <div className="services-container">
        <ul>
          {services.length > 0 &&
            services.map((service, i) => (
              <li key={i}>
                <div className="services-content">
                  <div className="services-title">
                    <div className="services-title-content">
                      <div className="services-icon">
                        <Icon name="wrench" />
                      </div>
                      <p>{service.SERVICE_NAME}</p>
                      {/* <p>{service.SERVICE_PROVIDERS_SERVICES_ID}</p> */}
                    </div>
                    <div className="services-status-content">
                      <p>{service.AVAILABLE_NAME}</p>
                    </div>
                  </div>
                  <div className="services-desc">
                    <p>{service.SERVICE_DETAILS}</p>
                  </div>

                  <div className="services-action-btn">
                    <p>
                      Start from {service.START_PRICE} {service.CURRENCY}
                    </p>
                    {/* <div className="action-btns">
                      <div
                        className="action-content"
                        onClick={() =>
                          handleOnClickDeleteService(
                           
                            service.SERVICE_PROVIDERS_SERVICES_ID
                          )
                        }
                      >
                        <Icon name="trash" />
                        <p>Delete</p>
                      </div>
                    </div> */}
                    <div className="action-btns">

                    <div
                        className="action-content"
                        onClick={() => setState({ alert_confirm: true })} >
                         <Icon name="trash" />
                        <p>Delete</p>
                      </div>
                    </div>
                    {state.alert_confirm ? (
                                                    <SweetAlert
                                                    title="Are you sure?"
                                                    warning
                                                    showCancel
                                                    confirmBtnBsStyle="success"
                                                    cancelBtnBsStyle="danger"
                                                    onConfirm={() =>
                                                        handleOnClickDeleteService(
                           
                                                          service.SERVICE_PROVIDERS_SERVICES_ID
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
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceAndPartsComponent;
