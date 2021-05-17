import React, { useContext, useState, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Col, Card, CardBody, FormGroup, Input, Label } from "reactstrap";
import { Button, Icon } from "semantic-ui-react";
import StateContext from "../../../component/context/stateContext";
import {
  updateDataLocalStorage,
  _updateProfile,
  _uploadProfileImage,
} from "../../../services/accountRequests";
import user from "../../../assets/images/users/avatar.jpg";

const AccountInfoTab = ({ accountInfo }) => {
  //  (accountInfo.USER_IMAGE_PATH);
  const [img, setImg] = useState(
    accountInfo.USER_IMAGE_PATH === null ? user : accountInfo.USER_IMAGE_PATH
  );
  const [edit, setEdit] = useState("");
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    nationality: "",
    phone: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    let isMounted = true;
    if (!isMounted) return;
    
    if (accountInfo.USER_IMAGE_PATH !== null) {
      setImg(accountInfo.USER_IMAGE_PATH);
    } else {
      setImg("");
    }
    setState({
      ...state,
      firstName: accountInfo.firstname,
      lastName: accountInfo.lastname,
      nationality: accountInfo.nationality,
      phone: accountInfo.phonenumber,
      email: accountInfo.email,
    });
    return () => {
      isMounted = false;
    };
  }, [accountInfo]);

  const [loading, setLoading] = useState(false);
  const { setShowModal, setCurrentImage } = useContext(StateContext);
  const history = useHistory();

  //   On uploading image
  const handleOnSelectedFile = (e) => {
    setLoading(true);

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(reader);
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    //  (e.target.files[0], accountInfo.id);
    //  (reader.readAsDataURL(e.target.files[0]));
    const uploadImg = new FormData();
    uploadImg.append("profile", e.target.files[0]);
    uploadImg.append("USER_ID", accountInfo.id);
    _uploadProfileImage(uploadImg).then((res) => {
      console.log(res);
      const update = {
        image: reader.result,
        firstName: accountInfo.firstname,
        lastName: accountInfo.lastname,
        nationality: accountInfo.nationality,
        phone: accountInfo.phonenumber,
        email: accountInfo.email,
      };

      updateDataLocalStorage(update);
      setCurrentImage(reader.result);
      setShowModal({
        modalName: "success",
        data: { uploadType: "uploadSuccess" },
      });
      setLoading(false);
    });
  };

  const handleOnClickSubmit = () => {
    setLoading(true);

    if (
      state.currentPassword === "" &&
      state.newPassword === "" &&
      state.confirmPassword === ""
    ) {
      const update = {
        USER_ID: accountInfo.id,
        FIRST_NAME: state.firstName,
        LAST_NAME: state.lastName,
        PHONE_NUMBER: state.phone,
        EMAIL: state.email,
      };

      _updateProfile(update).then((res) => {
        setLoading(false);
        if (/Invalid/.test(res.message)) {
          history.push("/login"); 
          return;
        }
        setShowModal({ modalName: "success", data: null });
      });
    }
  };

  return (
    <Fragment>
      {accountInfo && (
        <Card style={{ borderRadius: "20px" }}>
          {loading && (
            <div id="loading">
              <div class="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          )}
          <CardBody>
            <div className="directory-bg text-center">
              <div className="directory-overlay">
                <div className="img-container">
                  <img
                    className="rounded-circle avatar-lg img-thumbnail"
                    src={img === "" ? user : img}
                    alt="Generic placeholder"
                  />
                  <div className="upload-imgInput">
                    <Input
                      type="file"
                      id="img-input"
                      accept="image/*"
                      onChange={handleOnSelectedFile}
                    />
                    <label htmlFor="img-input">
                      <Icon name="camera" />
                    </label>
                  </div>
                </div>

                <p className=" mt-4">
                  {accountInfo.firstname} {accountInfo.lastname}
                </p>
              </div>
            </div>
            <h4 className="card-title">Personal info</h4>

            <hr />
            <FormGroup row>
              <Label htmlFor="firstName" className="col-sm-2 col-form-label">
                First Name
              </Label>
              <Col sm="10" className="field-flex">
                <Input
                  className="form-control"
                  type="text"
                  defaultValue={accountInfo.firstname}
                  id="firstName"
                  disabled={edit !== "firstName" ? true : false}
                  onChange={(e) =>
                    setState({ ...state, firstName: e.target.value })
                  }
                />
                <Icon name="edit" onClick={() => setEdit("firstName")} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastName" className="col-sm-2 col-form-label">
                Last Name
              </Label>
              <Col sm="10" className="field-flex">
                <Input
                  className="form-control"
                  type="text"
                  defaultValue={accountInfo.lastname}
                  id="lastName"
                  disabled={edit !== "lastName" ? true : false}
                  onChange={(e) =>
                    setState({ ...state, lastName: e.target.value })
                  }
                />
                <Icon name="edit" onClick={() => setEdit("lastName")} />
              </Col>
            </FormGroup>
            {/* <FormGroup row>
              <Label htmlFor="nationality" className="col-sm-2 col-form-label">
                Nationality
              </Label>
              <Col sm="10" className="field-flex">
                <Input
                  className="form-control"
                  type="text"
                  defaultValue={accountInfo.nationality}
                  id="nationality"
                  disabled={edit !== "nationality" ? true : false}
                  onChange={(e) =>
                    setState({ ...state, nationality: e.target.value })
                  }
                />
                <Icon name="edit" onClick={() => setEdit("nationality")} />
              </Col>
            </FormGroup> */}
            <FormGroup row>
              <Label for="phone" className="col-sm-2 col-form-label">
                Phone Number
              </Label>
              <Col sm="10" className="field-flex">
                <Input
                  className="form-control"
                  type="text"
                  defaultValue={accountInfo.phonenumber}
                  id="phone"
                  disabled={edit !== "phone" ? true : false}
                  onChange={(e) =>
                    setState({ ...state, phone: e.target.value })
                  }
                />
                <Icon name="edit" onClick={() => setEdit("phone")} />
              </Col>
            </FormGroup>
          </CardBody>

          <CardBody>
            <h4 className="card-title">Security info</h4>
            <hr />

            <FormGroup row>
              <Label for="email" className="col-sm-2 col-form-label">
                Email Address
              </Label>
              <Col sm="10" className="field-flex">
                <Input
                  className="form-control"
                  type="email"
                  defaultValue={accountInfo.email}
                  id="email"
                  disabled={edit !== "email" ? true : false}
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                />
                <Icon name="edit" onClick={() => setEdit("email")} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label
                for="example-password-input"
                className="col-sm-2 col-form-label"
              >
                Password
              </Label>
              <Col sm="10" className="field-flex">
                <Input
                  className="form-control"
                  type="password"
                  defaultValue="hunter2"
                  id="example-password-input"
                  disabled={true}
                />
                {edit === "password" ? (
                  <Icon name="times" onClick={() => setEdit("")} />
                ) : (
                  <Icon name="edit" onClick={() => setEdit("password")} />
                )}
              </Col>
            </FormGroup>
            {edit === "password" && (
              <div className="edit-password-container">
                <FormGroup row>
                  <Label
                    htmlFor="editCurrentPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Current password
                  </Label>
                  <Col sm="10">
                    <Input
                      className="form-control"
                      type="password"
                      id="editCurrentPassword"
                      placeholder="******"
                      onChange={(e) =>
                        setState({ ...state, currentPassword: e.target.value })
                      }
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    htmlFor="editNewPassword"
                    className="col-sm-2 col-form-label"
                  >
                    New Password
                  </Label>
                  <Col sm="10">
                    <Input
                      className="form-control"
                      type="password"
                      id="editNewPassword"
                      placeholder="******"
                      onChange={(e) =>
                        setState({ ...state, newPassword: e.target.value })
                      }
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    htmlFor="editConfirmPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Confirm Password
                  </Label>
                  <Col sm="10">
                    <Input
                      className="form-control"
                      type="password"
                      id="editConfirmPassword"
                      placeholder="******"
                      onChange={(e) =>
                        setState({ ...state, confirmPassword: e.target.value })
                      }
                    />
                  </Col>
                </FormGroup>
              </div>
            )}

            <div className="form-action-btn" id="accounFormAction">
              <Button
                onClick={handleOnClickSubmit}
                loading={loading}
                disabled={loading}
              >
                Save
              </Button>
            </div>
          </CardBody>
        </Card>
      )}
    </Fragment>
  );
};

export default AccountInfoTab;
