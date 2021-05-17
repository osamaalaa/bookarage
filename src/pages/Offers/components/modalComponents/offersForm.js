import React, {
  useEffect,
  useState,
  Fragment,
  useRef,
  useContext,
} from "react";
import { useHistory } from "react-router";
import { Button, Form, TextArea } from "semantic-ui-react";
import imgUpload from "../../../../assets/images/photo-ic.svg";
import { _getServiceProviderInfo } from "../../../../services/dashboardRequests";
import DatePicker from "react-datepicker";
import {
  _createNewOffer,
  _getOffersType,
} from "../../../../services/offersRequests";
import moment from "moment";
import StateContext from "../../../../component/context/stateContext";
import { Card, CardBody, TabContent, NavItem, NavLink, Label , Input,  Progress, Container } from "reactstrap";
import { Col, Row, TabPane } from "reactstrap";
import { Link } from "react-router-dom";  
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";

const maxLength = 20;

function nameLengthValidator(file) {
  if (file.name.length > maxLength) {
    return {
      code: "name-too-large",
      message: `Name is larger than ${maxLength} characters`
    };
  }

  return null
}
const OffersForm = ({ cancel, nextStep }) => {
  const [img, setImg] = useState([]);
  const [brands, setBrands] = useState([]);
  const [services, setServices] = useState([]);
  const imgAction = useRef(null);
  const history = useHistory();
  const { setShowModal, setUpdateRequests } = useContext(StateContext);
  const [state, setState] = useState({
    serviceID: "",
    offerDesc: "",
    offerType: "",
    offerDiscount: "",
    valid: "",
    offerAvailability: "",
    offerName: "",
    loading: false,
    validImg: false
  });
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };
  useEffect(() => {
    let isMounted = new AbortController();
    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );
    _getServiceProviderInfo(serviceProviderID.SERVICE_PROVIDER_ID).then(
      (res) => {
        
        if (!res.success) {
          if (res.error === "token") {
            history.push("/login");
            return;
          }
          return;
        }

        setBrands(res.result.brands);
        setServices(res.result.services);
        setState({ ...state, serviceID: res.result.services[0].SERVICE_ID });
      }
    );

    return () => {
      isMounted.abort();
    };
  }, []);

  const handleOnClickUpload = () => {
    imgAction.current.click();
  };
  const  handleAcceptedFiles = files => {
    setState({ ...state, loading: false });
      files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          formattedSize: formatBytes(file.size)
        })
      );
          console.log("Files", files[0]);
          setImg(files)
    //  setState({...state, eventImage: files})
    
    //  eventImage
    //  setState({}) 
    };
  // const handleOnChangeUpload = (e) => {
    
  //   setImg(e.target.files[0]);
  // };

  // const handleOnChangeCheckbox = (e, { checked, value }) => {
  //   if (checked) {
  //     setState({ ...state, offerAvailability: value });
  //   } else {
  //     setState({ ...state, offerAvailability: value });
  //   }
  // };

  const handleOnChangeCheckbox = (e, { checked, value }) => {
     
    if(checked){
      
    }
}

  const handleOnClickCreate = () => {

    if (!img[0] ) {
      alert("Please Enter The Offer Image!")
      // window.location.reload();
      return;
    }

    if (!state.offerDiscount) {
      alert("Please Enter The Offer Discount!")
      // window.location.reload();
      return;
    }

    if (! state.serviceID) {
      alert("Please Enter The Service Name!")
      // window.location.reload();
      return;
    }
  
  

    setState({ ...state, loading: true });
   

    const serviceProviderID = JSON.parse(
      localStorage.getItem("serviceProviderData") || "[]"
    );

    const newOffer = new FormData();
    newOffer.append(
      "SERVICE_PROVIDER_ID",
      serviceProviderID.SERVICE_PROVIDER_ID
    );
    newOffer.append("DISCOUNT_PERCENTAGE", state.offerDiscount);
    newOffer.append("OffersImage", img[0]);
    newOffer.append("OFFER_NAME", state.offerName);
    newOffer.append("VALID_TILL", moment(state.valid).format("YYYY-MM-DD"));
    newOffer.append("OFFER_TYPE_ID", 2);
    newOffer.append("OFFER_DETAILS", state.offerDesc);
    newOffer.append("SERVICE_ID", state.serviceID);
    newOffer.append("OFFER_AVAILABILITY", state.offerAvailability ? "1" : "0");

    _createNewOffer(newOffer).then((res) => {
      
      if (!res.success) {
        alert("Please Enter A valid Data For Offers !")
        window.location.reload();
        return;
      }
      console.log("NEW OFFER" , res);
      localStorage.setItem("newOffer", JSON.stringify(res.result));

      setState({ ...state, loading: false });
      
      setUpdateRequests("offers");
      cancel();
      setShowModal({ modalName: "success", data: { type: "offer" } });
    });
  };

  return (
    <Fragment>
      <Form className="offers-form" loading={state.loading}>
        <Form.Field>
          <p>Add Picture</p>
          {/* <div className="uploadImg-container" onClick={handleOnClickUpload}> */}
            
            {/* <input
              type="file"
              ref={imgAction}
              name="file"
              onChange={handleOnChangeUpload}
            /> */}
               <Dropzone
                    onDrop={acceptedFiles => 
                    handleAcceptedFiles(acceptedFiles)
                    
                    
                  
                    }

                    // validator= {nameLengthValidator}

                    
                >
                    {({ getRootProps, getInputProps }) => (
                    <div className="dropzone">
                        <div
                        className="dz-message needsclick mt-2"
                        {...getRootProps()}
                          Style="padding: 80px;" >
                        <input {...getInputProps()} required />
                        <div className="mb-3">
                            <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                        </div>
                        <img src={imgUpload} alt="" />
                        </div>
                    </div>
                    )}
                </Dropzone>
               
                                                            
                                                            
          {/* </div> */}
              <small>File Details size maximum 2MB extension jpg , png</small>
              
              <div
                      className="dropzone-previews mt-3"
                  id="file-previews"
              >
                  {img.map((f, i) => {
                  return (
                      <Card
                      className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                      key={i + "-file"}
                      >
                      <div className="p-2">
                          <Row className="align-items-center">
                          <Col className="col-auto">
                              <img
                              data-dz-thumbnail=""
                              height="80"
                              className="avatar-sm rounded bg-light"
                              alt={f.name}
                              src={f.preview}
                              />
                          </Col>
                          <Col>
                              <Link
                              to="#"
                              className="text-muted font-weight-bold"
                              >
                              {f.name}
                              </Link>
                              <p className="mb-0">
                              <strong>{f.formattedSize}</strong>
                              </p>
                          </Col>
                          </Row>
                      </div>
                      </Card>
                  );
                  })}
              </div>

        </Form.Field>

        <Form.Field>
          <p>Offer Name</p>
          <Form.Input
            type="text"
            onChange={(e, { value }) =>
              setState({ ...state, offerName: value })
            }
          />
        </Form.Field>

        <div className="form-group">
          <p>Select Service</p>
          <select
            className="form-control"
            onChange={(e) => setState({ ...state, serviceID: e.target.value })}
          >
            <option value="0" disabled>
              Select Service
            </option>
            {services.length > 0 &&
              services.map((service, i) => (
                <option key={i} value={service.SERVICE_ID}>
                  {service.SERVICE_NAME}
                </option>
              ))} 
          </select>
        </div>

        <Form.Field  >
          <p>Offer Details</p>
          <TextArea
            rows={3}
            placeholder="type here"
            onChange={(e, { value }) =>
              setState({ ...state, offerDesc: value })
            }
           ></TextArea>
        </Form.Field>

        <Form.Group widths="equal">
          <Form.Field>
            <p>Offer Type</p>
            <select className="form-control">
              <option value="discount">Discount</option>
            </select>
          </Form.Field>

          <Form.Field>
            
            <p>Offer Discount (%)</p>
            <Form.Input
              placeholder="ex: 10"
              type="text"
              onChange={(e, { value }) =>
                setState({ ...state, offerDiscount: value })
              }
            />

          </Form.Field>
          <Form.Field>
            <div className="form-group valid-date">
              <p>Valid Date</p>
              <DatePicker
                className="form-control"
                selected={state.valid}
                onChange={(value) =>
                  setState({
                    ...state,
                    valid: value,
                  })
                }
              />
            </div>
          </Form.Field>
        </Form.Group>

        <div className="form-action-btn offers-action">
          <Button
            content="Create Offer"
            loading={state.loading}
            disabled={state.loading}
            onClick={handleOnClickCreate}
          />
          <Button
            content="Cancel"
            loading={state.loading}
            disabled={state.loading}
            onClick={() => cancel()}
          />
        </div>
      </Form>
    </Fragment>
  );
};

export default OffersForm;
