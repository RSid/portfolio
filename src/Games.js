import unsunglogo from './images/unsungLogo.png'
import yokohama from './images/yokohama1865.png'
import Image from 'react-bootstrap/Image'
import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Games extends React.Component {
  render() {
    return (
      <div className="games">
        <h1>Games!</h1>
        <Row>
            <Col>
            </Col>
            <Col xs={6}>
                <Row>
                    <Image src={unsunglogo} />
                    <span className="image-side-text">
                    Contributed content, art, and playtesting to Peter Borah's
                    <a href="http://www.unsungtales.com/" target="_blank" rel="noopener noreferrer" className="margin-left-1p">
                        Unsung Tales.
                    </a>
                    </span>
                </Row>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className="padding-1p-top-bottom">
            <Col>
            </Col>
            <Col xs={6}>
                <Row>
                    <Image src={yokohama} roundedCircle className="maxrem--7" />
                    <span className="image-side-text">
                    Fiasco Playset for <a href="http://fiascoplaysets.com/home/yokohama-1865"  target="_blank" rel="noopener noreferrer">
                        Yokohama 1865.
                    </a>
                    </span>
                </Row>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className="padding-1p-top-bottom">
            <Col>
            </Col>
            <Col xs={6}>
                <Row>
                    <a href="https://boardgamegeek.com/rpgproducer/42430/alla-hoffman"  target="_blank" rel="noopener noreferrer">
                        Sundry Gamechef entries, Monsterhearts skins, and other messy ideas.
                    </a>
                </Row>
            </Col>
            <Col>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Games;
