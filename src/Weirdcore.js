import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import GANs from './GANs.js';
import GenerativeArt from './GenerativeArt.js';

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
         <div>
            <h3 class="App-subheader">
                <Button variant="link" onClick={() => this.hideComponent("showHideGenerative")}>
                    Generative art
                </Button>
            </h3>
            { showHideGenerative && <GenerativeArt /> }
            <h3 class="App-subheader">
                <Button variant="link" onClick={() => this.hideComponent("showHideGAN")}>
                    Fun with GANs
                </Button>
            </h3>
            { showHideGAN && <GANs /> }
         </div>
      </div>
    );
  }
}

export default Weirdcore;
