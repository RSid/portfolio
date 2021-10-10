import React, { Component } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Freelance extends React.Component {
  render() {
    return (
      <div className="freelance">
        <h1>I freelance!</h1>
        <Row className="text-align-left padding-1p-bottom">
          I have a full-time job as a tech lead, so I'm only accepting new projects that
          I'm particularly excited about and that require a limited time commitment.
        </Row>
        <Row className="text-align-left padding-1p-bottom">
          Projects I've worked on include:
        </Row>
        <Row className="text-align-left">
          <ul>
            <li>
              An administrative website for the
              <a href="https://www.massbailfund.org/"  target="_blank" rel="noopener noreferrer" className="margin-left-1p margin-right-1p">
                Massachusetts Bail Fund
              </a>
              <ul>
                <li className="small-italic">Payment on a sliding scale or occasional volunteer work available for a good cause!</li>
              </ul>
            </li>
            <li>A GUI on top of a legacy contact management system for JHK Taekwondo Studio</li>
            <li>Data visualizations and logos</li>
          </ul>
        </Row>
        <Row>
          Find me on
          <a href="https://www.linkedin.com/in/allahoffman/" target="_blank" rel="noopener noreferrer" className="margin-left-1p margin-right-1p">
           LinkedIn
          </a>
           or on
           <a href="https://www.upwork.com/freelancers/~0171828254ba303b6b?viewMode=1" target="_blank" rel="noopener noreferrer" className="margin-left-1p margin-right-1p">
             Upwork
           </a>
           if you'd like to chat or learn more about my skillset.
        </Row>
      </div>
    );
  }
}

export default Freelance;
