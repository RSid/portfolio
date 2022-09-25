import React from "react";
import Button from 'react-bootstrap/Button';
import GANs from './GANs.js';
import GenerativeArt from './GenerativeArt.js';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavItem from 'react-bootstrap/Nav'

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
               <h3 className="App-subheader xanadu-grey">
                   <NavItem href="https://cityofys.herokuapp.com/tourism" className="btn btn-link justify-content-center" as="a">An imaginary city</NavItem>
               </h3>
                <h3 className="App-subheader xanadu-grey">
                    <Button variant="link" onClick={() => this.hideComponent("showHideGAN")}>
                        Fun with GANs
                    </Button>
                </h3>
                { showHideGAN && <GANs /> }
                <h3 className="App-subheader xanadu-grey">
                    <Button variant="link" onClick={() => this.hideComponent("showHideGenerative")}>
                        Generative art
                    </Button>
                </h3>
                { showHideGenerative && <GenerativeArt /> }
            </Col>
            <Col>
            </Col>
         </Row>
      </div>
    );
  }
}

export default Weirdcore;
