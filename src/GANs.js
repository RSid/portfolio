import React, { Component } from "react";
import bluecatcar from './images/bluecatcargan.png'
import whitecat from './images/whitecat.png'
import airbrushcat from './images/airbrushcat.png'
import Card from 'react-bootstrap/Card';

class GANs extends React.Component {
    render() {
        return(
        <div>
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
        </div>)
    }
}

export default GANs;
