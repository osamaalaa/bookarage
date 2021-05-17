import React, { Component } from "react";
import { connect } from "react-redux";
import Countdown from "react-countdown";
import Renderer from "../../component/countdown/Renderer";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { Helmet } from "react-helmet";
import "../../assets/scss/style.scss";
import BackGround from "../../assets/images/Inquires/coming-soon-10.jpg";
import Breadcrumb from "../../component/Common/breadcrumb";
import { Col, Row } from "reactstrap";
class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Bookarage", link: "#" },
        { title: "Pages", link: "#" },
        { title: "ComingSoon", link: "/ComingSoon" },
      ],
    };
  }

  componentDidMount() {
    this.props.setBreadcrumbItems("ComingSoon", this.state.breadcrumbItems);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Row>
          <Col lg="12">
            <br />
            <Breadcrumb />
          </Col>
        </Row>

        <div
          className="cs-10-page-wrapper h-100 bg-img d-flex flex-column justify-content-between"
          // style={{
          //   backgroundImage: `url("coming-soon-10.jpg")`
          // }}
          style={{ backgroundImage: `url(${BackGround})`, marginTop: "100px" }}
        >
          {/*====================  content ====================*/}
          <div className="cs-15-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <h2 className="cs-15-content__title">WE ARE COMING SOON</h2>
                  <h3 className="cs-15-content__subtitle space-mt--r30">
                    We are still working on it
                  </h3>
                  {/* countdown */}
                  <div className="cs-15-countdown space-mt--50">
                    <Countdown
                      date={new Date("April 01, 2021 12:12:00")}
                      renderer={Renderer}
                    />
                  </div>
                  <div className="cs-15-subscription-wrapper space-mt--50">
                    {/* subscribe email */}
                    {/* <SubscribeEmail mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====================  End of content  ====================*/}
        </div>
      </React.Fragment>
    );
  }
}
export default connect(null, { setBreadcrumbItems })(ComingSoon);
