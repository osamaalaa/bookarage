import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                    <footer className="footer">
                        <Container fluid>
                            <Row>
                                <Col sm="12">
                                    © {new Date().getFullYear()} <span className="d-none d-sm-inline-block"> - Created by Spiritude LTD.</span>
                                </Col>
                            </Row>
                        </Container>
                    </footer>
            </React.Fragment>
        );
    }
}

export default Footer;