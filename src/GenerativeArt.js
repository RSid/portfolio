import React from "react";
import Sketch from "react-p5";

class GenerativeArt extends React.Component {
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
                if(i%2 === 0) {
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

        return(
            <div>
                <Sketch setup={setup} draw={draw} />
                A sketch written in p5.js. p5/Processing are great tools for artists to experiment in code. <br/>
                Check out some more doodles <a href="https://openprocessing.org/user/29228?view=sketches" target="_blank" rel="noopener noreferrer"> here </a> if you like!
            </div>
        )
    }
}

export default GenerativeArt;
