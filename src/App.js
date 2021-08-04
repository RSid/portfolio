import logocat from './images/bluecatcargan.png'
import './App.css';
import React, { Component } from "react";
import Freelance from "./Freelance";
import Weirdcore from "./Weirdcore";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideFreelance: false,
      showHideWeirdcore: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideFreelance":
        this.setState({ showHideFreelance: !this.state.showHideFreelance });
        break;
      case "showHideWeirdcore":
        this.setState({ showHideWeirdcore: !this.state.showHideWeirdcore });
        break;
    }
  }

  render() {
   const { showHideFreelance, showHideWeirdcore } = this.state;
   return (
     <div className="App">
     <Container fluid>
      <Row>
        <Col>
        </Col>
        <Col>
         <Image roundedCircle src={logocat} className="logocat" alt="logocat" />
        </Col>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col>
          <h1 class="dusty-pink">Alla likes making stuff.</h1>
        </Col>
        <Col>
        </Col>
      </Row>


          <Row>
            <Col>
            </Col>
            <Col>
              <h2> What do you want to see? </h2>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
           <Col>
             <div>
              I want to see your writing!
             </div>
           </Col>
           <Col>
             <div>
              I want to see your
               <Button variant="link" onClick={() => this.hideComponent("showHideWeirdcore")}>
                weird art!
              </Button>
             </div>

             {showHideWeirdcore && <Weirdcore />}
           </Col>
           <Col>
             <div>
              I want to see your games!
             </div>
           </Col>
           <Col>
           <div>
             I want to see your code!
             <Button onClick={() => this.hideComponent("showHideFreelance")} variant="link">
              Looking for a freelance web developer?
            </Button>
           </div>

           {showHideFreelance && <Freelance />}
           </Col>
          </Row>

       </Container>
     </div>
   );
 }
}

export default App;
