import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Writing extends React.Component {
  render() {
    return (
      <div className="writing">
        <h1>Published fiction</h1>
        <Row>
        <Col>
        </Col>
        <Col>
          <Row>
            Coffin Bell Journal:
            <a href="https://coffinbell.com/housebroken/" target="_blank" rel="noopener noreferrer" className="margin-left-1p">
                Housebroken
            </a>,
            <a href="https://coffinbell.com/two-wishes/" target="_blank" rel="noopener noreferrer" className="margin-left-1p">
                Two Wishes
            </a>
          </Row>
          <Row>
            The Kunlun Journal of Historical Fiction:
            <a href="https://issuu.com/kunlunjournal/docs/issue_1" target="_blank" rel="noopener noreferrer" className="margin-left-1p">
                Paintings of Orchids
            </a>
          </Row>
          <Row>
            Rejection Letters:
              <a href="https://rejection-letters.com/2023/02/28/thank-you-for-your-interest-alla-hoffman/"  target="_blank" rel="noopener noreferrer" className="margin-left-1p">
                Thank You For Your Interest
              </a>
          </Row>
          <Row>
            One Forty Fiction:
            <a href="http://www.onefortyfiction.com/archives/processing" target="_blank" rel="noopener noreferrer" className="margin-left-1p">
                Processing
            </a>
          </Row>
          <Row>
            365 Tomorrows:
            <a href="https://365tomorrows.com/2012/05/09/honorable-discharge/" target="_blank" rel="noopener noreferrer" className="margin-left-1p">
                Honorable Discharge
            </a>,
            <a href="https://365tomorrows.com/2012/05/09/honorable-discharge/" target="_blank" rel="noopener noreferrer" className="margin-left-1p">
                E.L.E. Sapiens
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

export default Writing;
