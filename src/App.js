import logocat from './images/bluecatcargan.png'
import './App.css';
import React, { Component } from "react";
import Freelance from "./Freelance";
import Weirdcore from "./Weirdcore";
import Games from "./Games";
import Writing from "./Writing";
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
      showHideFreelanceSubsections: false,
      showHideWeirdcoreSubsections: false,
      showHideGamesSubsections: false,
      showHideWritingSubsections: false,
      showWritingSection: true,
      showGamesSection: true,
      showCodeSection: true,
      showWeirdcoreSection: true
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHideFreelanceSubsections":
        this.setState({ showHideFreelanceSubsections: !this.state.showHideFreelanceSubsections });
        this.setState({ showWritingSection: this.state.showHideFreelanceSubsections });
        this.setState({ showGamesSection: this.state.showHideFreelanceSubsections });
        this.setState({ showWeirdcoreSection: this.state.showHideFreelanceSubsections });
        break;
      case "showHideWeirdcoreSubsections":
        this.setState({ showHideWeirdcoreSubsections: !this.state.showHideWeirdcoreSubsections });
        this.setState({ showWritingSection: this.state.showHideWeirdcoreSubsections });
        this.setState({ showGamesSection: this.state.showHideWeirdcoreSubsections });
        this.setState({ showCodeSection: this.state.showHideWeirdcoreSubsections });
        break;
    case "showHideGamesSubsections":
      this.setState({ showHideGamesSubsections: !this.state.showHideGamesSubsections });
      this.setState({ showWritingSection: this.state.showHideGamesSubsections });
      this.setState({ showWeirdcoreSection: this.state.showHideGamesSubsections });
      this.setState({ showCodeSection: this.state.showHideGamesSubsections });
      break;
    case "showHideWritingSubsections":
        this.setState({ showHideWritingSubsections: !this.state.showHideWritingSubsections });
        this.setState({ showGamesSection: this.state.showHideWritingSubsections });
        this.setState({ showWeirdcoreSection: this.state.showHideWritingSubsections });
        this.setState({ showCodeSection: this.state.showHideWritingSubsections });
        break;
    }
  }

  render() {
   const { showHideFreelanceSubsections,
       showHideWeirdcoreSubsections,
       showHideGamesSubsections,
       showHideWritingSubsections,
       showWritingSection,
       showGamesSection,
       showCodeSection,
       showWeirdcoreSection } = this.state;

   return (
     <div className="App">
       <Container fluid>
        <Row className="padding-3p">
           <Col>
           </Col>
           <Col>
             <h1>Alla likes making stuff.</h1>
           </Col>
           <Col>
           </Col>
        </Row>

        <Row className="padding-1p-bottom">
          <Col>
          </Col>
          <Col xs={8}>
          <div className="speech-bubble-right inline-block xanadu-grey">
           Hi. What do you want to see?
          </div>
           <Image roundedCircle src={logocat} className="logocat padding-5p" alt="logocat" />
          </Col>
          <Col>
          </Col>
        </Row>

        <Row>
         { showWritingSection && <Col>
           <div>
            I want to see
            <Button variant="light" onClick={() => this.hideComponent("showHideWritingSubsections")} className="standard-btn-overrides">
             { showHideWritingSubsections? "something else" : "your creative writing!" }
           </Button>
           </div>
           { showHideWritingSubsections && <Writing /> }
         </Col> }
         { showWeirdcoreSection && <Col>
           <div>
            I want to see
             <Button variant="light" onClick={() => this.hideComponent("showHideWeirdcoreSubsections")} className="standard-btn-overrides">
              { showHideWeirdcoreSubsections? "something else" : "your weird art!" }
            </Button>
           </div>

           { showHideWeirdcoreSubsections && <Weirdcore /> }
         </Col> }
         { showGamesSection && <Col>
           <div>
            I want to see
            <Button variant="light" onClick={() => this.hideComponent("showHideGamesSubsections")} className="standard-btn-overrides">
             { showHideGamesSubsections? "something else" : "your games!" }
           </Button>
            { showHideGamesSubsections && <Games /> }
           </div>
         </Col> }
        </Row>
        <Row className="padding-5p-top-bottom">
        </Row>
        <Row className="footer">
          <Col className="border-lightgreen" md={{ span: 6, offset: 3 }}>
            Find me on: <a href="https://github.com/RSid">Github</a> or <a href="https://twitter.com/AllaHoffman">Twitter</a>
          </Col>
        </Row>
       </Container>
     </div>
   );
 }
}

export default App;
