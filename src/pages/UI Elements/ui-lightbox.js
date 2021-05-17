import React, { Component } from 'react';
import {
  Col,
  Row,
  Card,
  Button,
  CardBody
} from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

//Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

//Modal Video
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// import image
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";

const images = [img1, img2, img3, img4, img5, img6];
const images1 = [img3, img7];

class UiLightbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Lexa", link : "#" },
                { title : "UI Elements", link : "#" },
                { title : "Lightbox", link : "#" },
            ],
            photoIndex: 0,
            isFits: false,
            isEffects: false,
            isGallery: false,
            isGalleryZoom: false,
            isOpen: false,
            isOpen1: false,
            modal_standard: false
        }
        this.openModal = this.openModal.bind(this);
        this.openModal1 = this.openModal1.bind(this);
        this.tog_standard = this.tog_standard.bind(this);
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Lightbox", this.state.breadcrumbItems);
    }

    tog_standard() {
        this.setState(prevState => ({
          modal_standard: !prevState.modal_standard
        }));
      }
    
    openModal() {
        this.setState({ isOpen: true });
    }
    
    openModal1() {
        this.setState({ isOpen1: true });
    }

    render() {
        const { photoIndex } = this.state;
        return (
            <React.Fragment>
                {this.state.isFits ? (
              <Lightbox
                mainSrc={images[1]}
                enableZoom={false}
                imageCaption={
                  "Caption. Can be aligned it to any side and contain any HTML."
                }
                onCloseRequest={() => this.setState({ isFits: false })}
              />
            ) : null}

            {this.state.isEffects ? (
              <Lightbox
                mainSrc={images[2]}
                enableZoom={false}
                onCloseRequest={() => this.setState({ isEffects: false })}
              />
            ) : null}

            {this.state.isGallery ? (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                enableZoom={false}
                onCloseRequest={() => this.setState({ isGallery: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length
                  })
                }
                imageCaption={"Project " + parseFloat(photoIndex + 1)}
              />
            ) : null}

            {this.state.isGalleryZoom ? (
              <Lightbox
                mainSrc={images1[photoIndex]}
                nextSrc={images1[(photoIndex + 1) % images1.length]}
                prevSrc={
                    images1[(photoIndex + images1.length - 1) % images1.length]
                }
                onCloseRequest={() => this.setState({ isGalleryZoom: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images1.length - 1) % images1.length
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images1.length
                  })
                }
              />
            ) : null}
                <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Single image lightbox</h4>
                                    <p className="card-title-desc">Three simple popups with different scaling settings.</p>

                                    <Row>
                                        <Col xs="6">
                                            <h5 className="mt-0 font-size-14 mb-3 text-muted">Fits (Horz/Vert)</h5> 
                                                <img className="img-fluid" onClick={() => this.setState({ isFits: true })} alt="" src={img2} width="145"/>
                                            
                                        </Col>
                                        <Col xs="6">
                                            <h5 className="mt-0 font-size-14 mb-3 text-muted">Effects</h5>
                                                <img className="img-fluid" alt="" onClick={() => this.setState({ isEffects: true })} src={img3} width="75"/>
                                            <p className="mt-2 mb-0 text-muted">No gaps, zoom animation, close icon in top-right corner.</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Lightbox gallery</h4>
                                    <p className="card-title-desc">In this example lazy-loading of images is enabled for the next image based on move direction. </p>

                                    <div className="popup-gallery">
                                            <div className="img-responsive float-left">
                                                <img src={img1} alt="" onClick={ () => this.setState({ isGallery: true, photoIndex: 0 }) } width="120"/>
                                            </div>
                                        
                                            <div className="img-responsive float-left">
                                                <img src={img2} alt="" onClick={ () => this.setState({ isGallery: true, photoIndex: 1 }) } width="120"/>
                                            </div>
                                        
                                        
                                            <div className="img-responsive float-left">
                                                <img src={img3} alt="" onClick={ () => this.setState({ isGallery: true, photoIndex: 20 }) } width="120"/>
                                            </div>
                                        
                                            <div className="img-responsive float-left">
                                                <img src={img4} alt="" onClick={ () => this.setState({ isGallery: true, photoIndex: 4 }) } width="120"/>
                                            </div>
                                        
                                            <div className="img-responsive float-left">
                                                <img src={img5} alt="" onClick={ () => this.setState({ isGallery: true, photoIndex: 5 }) } width="120"/>
                                            </div>
                                       
                                            <div className="img-responsive float-left">
                                                <img src={img6} alt="" onClick={ () => this.setState({ isGallery: true, photoIndex: 6 }) } width="120"/>
                                            </div>
                                    </div>

                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
                    

                    <Row>
                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Zoom Gallery</h4>
                                    <p className="card-title-desc">Zoom effect works only with images.</p>

                                    <div className="zoom-gallery">
                                        <img
                                            className="float-left"
                                            onClick={() =>
                                                    this.setState({ isGalleryZoom: true, photoIndex: 0 })
                                                }
                                            src={img3}
                                            alt=""
                                            width="275"
                                        />
                                        <img
                                            className="float-left"
                                            onClick={() =>
                                                    this.setState({ isGalleryZoom: true, photoIndex: 1 })
                                                }
                                            src={img7}
                                            alt=""
                                            width="275"
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="6">
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">Popup with video or map</h4>
                                    <p className="card-title-desc">In this example lazy-loading of images is enabled for the next image based on move direction. </p>

                                    <Row>
                                        <Col xs="12">
                                            <Button
                                                className="btn btn-secondary mr-1 mt-2"
                                                onClick={this.openModal}
                                            >
                                                Open Youtube Video
                                            </Button>{" "}
                                            <Button
                                                className="btn btn-secondary mr-1 mt-2"
                                                onClick={this.openModal1}
                                            >
                                                Open Vimeo Video
                                            </Button>{" "}
                                            <ModalVideo
                                                videoId='0O2aH4XLbto'
                                                channel="youtube"
                                                isOpen={this.state.isOpen}
                                                onClose={() => this.setState({ isOpen: false })}
                                            />
                                            <ModalVideo
                                                videoId='45830194'
                                                channel="vimeo"
                                                isOpen={this.state.isOpen1}
                                                onClose={() => this.setState({ isOpen1: false })}
                                            />
                                        </Col>
                                    </Row>

                                </CardBody>
                            </Card>
                        </Col>
                        
                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UiLightbox);