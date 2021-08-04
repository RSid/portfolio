import React, { Component } from "react";
import bluecatcar from './images/bluecatcargan.png'
import whitecat from './images/whitecat.png'
import airbrushcat from './images/airbrushcat.png'
import Card from 'react-bootstrap/Card';
import Sketch from "react-p5";

class Weirdcore extends React.Component {
  render() {
    var centerX;
    var centerY;
    var radius;
    var totalDegrees = 361;
      const setup = (p5, canvasParentRef) => {
          p5.createCanvas(500, 400).parent(canvasParentRef)
          p5.background(0);
          centerX = p5.width/2;
          centerY = p5.height/2;
          radius = p5.height/2;
          p5.angleMode(p5.DEGREES);
        }

        const draw = p5 => {
          p5.stroke(255, 100, 20, 25);
          p5.noFill();
          p5.beginShape();
          for( var i = 0; i <=totalDegrees; i++) {
            if(i%2 == 0) {
              var r = p5.random(0, 255);
              p5.stroke(r, 100, 20, 25);
            }

            var noiseFactor = p5.noise(i/(35 *(-radius * 10)), p5.frameCount/120);

            var x = centerX + radius * p5.cos(i) * noiseFactor;
            var y = centerY + radius * p5.sin(i) * noiseFactor;
            p5.curveVertex(x, y);

          }
          p5.endShape(p5.CLOSE);
          radius -= 0.65;
        }

    return (
      <div className="weirdcore">
         <div>
            <Sketch setup={setup} draw={draw} />
            <h3 class="App-subheader">Fun with GANs</h3>
            <div>
              I spent some time training pix2pix, a conditional generative
              adversarial network (cGAN) that's part of Tensorflow, on training
              sets of cats and cars to make catcars.

              <Card style={{ width: '18rem' }}>
               <Card.Img variant="top" src={bluecatcar} />
               <Card.Body>
                 <Card.Title>Bluecat</Card.Title>
                 <Card.Text>
                   Horrible
                 </Card.Text>
               </Card.Body>
             </Card>

             <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={whitecat} />
              <Card.Body bg="dusty-pink">
                <Card.Title>Whitecat</Card.Title>
                <Card.Text bg="dusty-pink">
                  Horrible
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={airbrushcat} />
             <Card.Body bg="dusty-pink">
               <Card.Title>airbrushcat</Card.Title>
               <Card.Text bg="dusty-pink">
                 Horrible
               </Card.Text>
             </Card.Body>
           </Card>

            </div>
            <br />
            <div>
              Inspired by [find the person who did the anime people], I also
              trained a model on images of anime faces and celebrities. I
              deliberately didn't tune the model until it could produce realistic
              outputs of people's 'anime-ified' faces as in [that project].
              I wanted to produce uncanny images, emphasizing both the distortions
              of human features that the anime drawing style produces and the
              distortions introduced by neural nets themselves as they learn what
              visual features are important to look at.
            </div>
         </div>
      </div>
    );
  }
}

export default Weirdcore;
