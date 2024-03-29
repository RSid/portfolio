import React from "react";
import bluecatcar from './images/bluecatcargan.png'
import whitecat from './images/whitecat.png'
import airbrushcat from './images/airbrushcat.png'
import benime from './images/benime.png'
import consumpt from './images/consumptivepoet.png'
import noseless from './images/nonose.png'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class GANs extends React.Component {
    render() {
        return(
        <div>
          <Row>
            <Col>
            </Col>
            <Col xs={8} className="text-align-left">
              I spent some time training pix2pix, a conditional generative
              adversarial network (cGAN) that's part of Tensorflow, on training
              sets of cats and cars to make catcars.
            </Col>
            <Col>
            </Col>
          </Row>
          <Row className="padding-1p-top-bottom">
            <Col>
            </Col>
            <Col xs={8}>
            <Row>
            <Col>
             <Card style={{ width: '11rem' }}>
              <Card.Img variant="top" src={whitecat} />
             </Card>
            </Col>
            <Col>
              <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={bluecatcar} />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={airbrushcat} />
              </Card>
            </Col>
            </Row>
            </Col>
            <Col>
            </Col>
          </Row>

          <Row>
            <Col>
            </Col>
            <Col xs={8} className="text-align-left">
              I also trained a model on images of anime faces and celebrities. I
              deliberately didn't tune the model until it could produce realistic
              outputs of people's 'anime-ified' faces.
              I wanted to produce uncanny images, emphasizing both the distortions
              of human features that the anime drawing style produces and the
              distortions introduced by neural nets themselves as they learn what
              visual features are important to look at.
            </Col>
            <Col>
            </Col>
          </Row>

          <Row className="padding-1p-top-bottom">
            <Col>
            </Col>
            <Col xs={8}>
            <Row>
            <Col>
             <Card style={{ width: '11rem' }}>
              <Card.Img variant="top" src={benime} />
             </Card>
            </Col>
            <Col>
              <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={consumpt} />
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '11rem' }}>
               <Card.Img variant="top" src={noseless} />
              </Card>
            </Col>
            </Row>
            </Col>
            <Col>
            </Col>
          </Row>
        </div>
      )
    }
}

export default GANs;
