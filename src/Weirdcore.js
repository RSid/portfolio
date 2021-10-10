import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import GANs from './GANs.js';
import GenerativeArt from './GenerativeArt.js';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Weirdcore extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "React",
        showHideGenerative: false,
        showHideGAN: false
      };
      this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
      console.log(name);
      switch (name) {
        case "showHideGenerative":
          this.setState({ showHideGenerative: !this.state.showHideGenerative });
          break;
        case "showHideGAN":
          this.setState({ showHideGAN: !this.state.showHideGAN });
          break;
      }
    }

  render() {
      const { showHideGenerative, showHideGAN } = this.state;


    return (
      <div className="weirdcore">
         <Row>
             <Col>
             </Col>
             <Col xs={8}>
                <h3 className="App-subheader">
                    <Button variant="link" onClick={() => this.hideComponent("showHideGenerative")}>
                        Generative art
                    </Button>
                </h3>
                { showHideGenerative && <GenerativeArt /> }
                <h3 className="App-subheader">
                    <Button variant="link" onClick={() => this.hideComponent("showHideGAN")}>
                        Fun with GANs
                    </Button>
                </h3>
                { showHideGAN && <GANs /> }
            </Col>
            <Col>
            </Col>
         </Row>
      </div>
    );
  }
}

export default Weirdcore;
