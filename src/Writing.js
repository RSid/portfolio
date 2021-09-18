import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Writing extends React.Component {
  render() {
    return (
      <div className="writing">
      <h1>Published fiction</h1>
      <Row>
        The Kunlun Journal of Historical Fiction:
        <a href="https://issuu.com/kunlunjournal/docs/issue_1" target="_blank" rel="noopener noreferrer">
            Paintings of Orchids
        </a>
      </Row>
      <Row>
        One Forty Fiction:
        <a href="http://www.onefortyfiction.com/archives/processing" target="_blank" rel="noopener noreferrer">
            Processing
        </a>
      </Row>
      <Row>
        365 Tomorrows:
        <a href="https://365tomorrows.com/2012/05/09/honorable-discharge/" target="_blank" rel="noopener noreferrer">
            Honorable Discharge
        </a>,
        <a href="https://365tomorrows.com/2012/05/09/honorable-discharge/" target="_blank" rel="noopener noreferrer">
            E.L.E. Sapiens
        </a>
      </Row>
      </div>
    );
  }
}

export default Writing;
