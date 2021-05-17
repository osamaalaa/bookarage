import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import { Icon } from "semantic-ui-react";
import StateContext from "../../../component/context/stateContext";
import {
  _deleteBrand,
  _getAllBrandsByServiceProviderId,
  _getServicesByProviderId,
  _deleteService,
  _getAllDefaultServiceByServiceProviderId,
  _DeleteServiceProviderDefaultService
} from "../../../services/managementRequests";
import SweetAlert from "react-bootstrap-sweetalert";
const ServiceAndPartsComponent = ({ update }) => {
  const { setShowModal } = useContext(StateContext);
  const [brands, setBrands] = useState([]);
  const [defaultServices, setDefaultService] = useState([]);
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

    alert_confirm_defaultService: false,
    success_confirm_defaultService: false

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

    if (update === "defaultService" || updateNow === "defaultService" || update === "") {
      _getAllDefaultServiceByServiceProviderId(
        serviceProviderId.SERVICE_PROVIDER_ID
      ).then((res) => {
       console.log("DefaultService" , res)
        setDefaultService(res.result);
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
          // window.location.reload();
      }
    });
  };

  const handleOnClickDeleteDefaultService = (providerId, defaultServiceId) => {
    setUpdateNow("");
    
    _DeleteServiceProviderDefaultService(defaultServiceId).then((res) => {
      if (res.success) {
        setUpdateNow("defaultService");
        setState({
          success_confirm_defaultService: true,
          alert_confirm_defaultService : false,
    
          })
      }
    });
  };


  const handleOnClickDeleteService = (serviceId) => {
    setUpdateNow("");
     
    _deleteService(serviceId).then((res) => {
      if (res.success) {
        setUpdateNow("");
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
        <p>Brands Sevices & Parts For </p>
        <p className="btn-text" onClick={() => handleOnClick("brand")}>
          <Icon name="plus" />
          Add Brand
        </p>
      </div>

      <div className="brands-container">
        <Row>
          {
            brands.map((brand, i) => (
              <Col key={i} lg="3" md="3" sm="6" xs="12" className="mb-3">
                <div className="brands">
                  <p>{brand.PROVIDER_BRAND_NAME}</p>
                  {/* <Icon
                    name="trash"
                    onClick={() =>
                      handleOnClickDeleteBrand(
                        brand.SERVICE_PROVIDER_ID,
                        brand.PROVIDER_BRAND_ID
                      )
                    }
                  /> */}
                    <div className="action-btns">

                          <div
                              className="action-content"
                              onClick={() => setState({ alert_confirm_brand: true })} >
                              <Icon name="trash" />
                             
                            </div>
                          </div>
                </div>
                {state.alert_confirm_brand ? (
                                                    <SweetAlert
                                                    title="Are you sure?"
                                                    warning
                                                    showCancel
                                                    confirmBtnBsStyle="success"
                                                    cancelBtnBsStyle="danger"
                                                    onConfirm={() =>
                                                      handleOnClickDeleteBrand(
                           
                                                        brand.SERVICE_PROVIDER_ID,
                                                        brand.PROVIDER_BRAND_ID
                                                        )
                                                        

                                                    }
                                                    onCancel={() =>
                                                        setState({
                                                            alert_confirm_brand: false,
                                                        })
                                                    }
                                                    >
                                                    You won't be able to revert this!
                                                    </SweetAlert>
                                                ) : null}

                

              </Col>
            ))}

        
        </Row>
      </div>
      <div className="page-title">
        <p>Providing Default Services</p>
        <p className="btn-text" onClick={() => handleOnClick("defaultService")}>
          <Icon name="plus" />
          Add Default Service
        </p>
      </div>
      <div className="brands-container">
        <Row>
          {
            defaultServices.map((defaultService, i) => (
              <Col key={i} lg="3" md="3" sm="6" xs="12" className="mb-3">
                <div className="brands">
                  <p>{defaultService.PROVIDER_DEFAULT_NAME}</p>
                  {/* <Icon
                    name="trash"
                    onClick={() =>
                      handleOnClickDeleteBrand(
                        brand.SERVICE_PROVIDER_ID,
                        brand.PROVIDER_BRAND_ID
                      )
                    }
                  /> */}
                    <div className="action-btns">

                          <div
                              className="action-content"
                              onClick={() => setState({ alert_confirm_defaultService: true })} >
                              <Icon name="trash" />
                             
                            </div>
                          </div>
                </div>
                {state.alert_confirm_defaultService ? (
                                                    <SweetAlert
                                                    title="Are you sure?"
                                                    warning
                                                    showCancel
                                                    confirmBtnBsStyle="success"
                                                    cancelBtnBsStyle="danger"
                                                    onConfirm={() =>
                                                      handleOnClickDeleteDefaultService(
                           
                                                        defaultService.SERVICE_PROVIDER_ID,
                                                        defaultService.PROVIDER_DEFAULT_ID
                                                        )
                                                        

                                                    }
                                                    onCancel={() =>
                                                        setState({
                                                            alert_confirm_defaulService: false,
                                                        })
                                                    }
                                                    >
                                                    You won't be able to revert this!
                                                    </SweetAlert>
                                                ) : null}

                

              </Col>
            ))}

        
        </Row>
      </div>
      <div className="page-title">
        <p>Providing Services</p>
        <p className="btn-text" onClick={() => handleOnClick("service")}>
          <Icon name="plus" />
          Add Service
        </p>
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

          {/* <li>
            <div className="services-content">
              <div className="services-title">
                <div className="services-title-content">
                  <div className="services-icon">
                    <Icon name="wrench" />
                  </div>
                  <p>Electric Repair</p>
                </div>
                <div className="services-status-content">
                  <p>Available</p>
                </div>
              </div>
              <div className="services-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum maxime odit corrupti nostrum perferendis. Corrupti
                  velit iste tempora incidunt quidem tempore ullam, ut hic!
                  Adipisci laboriosam aspernatur similique sit quidem.
                </p>
              </div>

              <div className="services-action-btn">
                <p>Start from 50 AED</p>
                <div className="action-btns">
                  <div className="action-content">
                    <Icon name="pencil" />
                    <p>Edit</p>
                  </div>
                  <div className="action-content">
                    <Icon name="trash" />
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
      

    
    </div>
  );
};

export default ServiceAndPartsComponent;
