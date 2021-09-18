import unsunglogo from './images/unsungLogo.png'
import yokohama from './images/yokohama1865.png'
import Image from 'react-bootstrap/Image'
import React, { Component } from "react";
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
            <Col>
                <Row>
                    <Image src={unsunglogo} />
                </Row>
                <Row>
                    Contributed content, art, and playtesting to Peter Borah's
                    <a href="http://www.unsungtales.com/" target="_blank" rel="noopener noreferrer">
                        Unsung Tales.
                    </a>
                </Row>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row>
            <Col>
            </Col>
            <Col>
                <Row>
                    <Image src={yokohama} />
                </Row>
                <Row>
                    Fiasco Playset for <a href="http://fiascoplaysets.com/home/yokohama-1865"  target="_blank" rel="noopener noreferrer">
                        Yokohama 1865.
                    </a>
                </Row>
            </Col>
            <Col>
            </Col>
        </Row>
            <Row>
            <Col>
            </Col>
            <Col>
                <a href="https://boardgamegeek.com/rpgproducer/42430/alla-hoffman"  target="_blank" rel="noopener noreferrer">
                    Sundry Gamechef entries, Monsterhearts skins, and other messy ideas.
                </a>
            </Col>
            <Col>
            </Col>
        </Row>
      </div>
    );
  }
}

export default Games;
