import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import StateContext from "../component/context/stateContext";

const ModalBreadCrumb = () => {
  const { modalBreadCrumb } = useContext(StateContext);
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    let isMounted = true;
    if (!isMounted || modalBreadCrumb.length === 0) return;
    setTitle(modalBreadCrumb.title);
    setBreadcrumbItems(modalBreadCrumb.links);
  
    return () => {
      isMounted = false;
    };
  }, [modalBreadCrumb]);
  return (
    <Row>
      <Col sm="6">
        <div className="page-title-box">
          <h4>{title}</h4>
          <ol className="breadcrumb m-0">
            {breadcrumbItems.map((item, key) =>
              key + 1 === breadcrumbItems.length ? (
                <li key={key} className="breadcrumb-item active">
                  {item.title}
                </li>
              ) : (
                <li key={key} className="breadcrumb-item">
                  <Link to="#">{item.title}</Link>
                </li>
              )
            )}
          </ol>
        </div>
      </Col>
    </Row>
  );
};

export default ModalBreadCrumb;
