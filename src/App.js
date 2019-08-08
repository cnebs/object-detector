import React, {useRef, useEffect} from 'react';
import './App.css';
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import classData from './data/classData.js'

const App = (props) => {
  // promised loading model 
  const loadModel = cocoSsd.load('mobilenet_v2');
  // Refs
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const canvasRef = useRef(null);
  const vidRef = useRef(null);
  

  // Utils
  const detectUtility = (video, model) => { // uses detect method on the model then calls the box building util below on each object recognized
  
    model.detect(video)
      .then(discriminations => {
        // console.log(discriminations);
        // props.handleCountFrames()
        buildRectangle(discriminations);
        // props.handleGuess(discriminations);
      })
    requestAnimationFrame(() => detectUtility(video, model));
  };

  const buildRectangle = discriminations => { // Draws a rectangle with html around each discriminations in the object passed in
    // !!!!
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    // !!!!

    const ctx = canvasRef.current.getContext('2d'); // define the rectangle
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Build the rectable styling
    ctx.lineWidth = 2;
    ctx.textBaseline = 'bottom';
    ctx.font = '14px sans-serif';
    
    discriminations.forEach(guess => { // Draw the rectangle around each object prediction
      const guessText = `${guess.class}`;
     
      ctx.strokeStyle = classData[guessText];
     
      const textWidth = ctx.measureText(guessText).width;
      const textHeight = parseInt(ctx.font, 10);
      ctx.strokeRect(guess.bbox[0], guess.bbox[1], guess.bbox[2], guess.bbox[3]);
      ctx.fillStyle = 'green';
      ctx.fillRect( 
        guess.bbox[0]-ctx.lineWidth/2, 
        guess.bbox[1], 
        textWidth + ctx.lineWidth, 
        -textHeight);
      ctx.fillStyle = '#fc0303'
      ctx.fillText(guessText, guess.bbox[0], guess.bbox[1]);
    });
  };

  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {

    const rules = {// Define the rules for the mediaDevices in loadCam below
      audio: false,
      video: {facingMode: 'environment'}
    };

    // Control if user has cam / browser
    if (navigator.mediaDevices.getUserMedia) { // check if the browser is getting a prompt for cam permission
      const loadCam = navigator.mediaDevices.getUserMedia(rules) // returns promise, ask for cam permission with constraints in rules above
      .then(stream => {
        vidRef.current.srcObject = stream;
        return new Promise(resolve => 
          vidRef.current.onloadedmetadata = resolve
          );
      })
      .catch(err => {
        alert(`Please allow the browser to access your device's camera!!!`)
      });

      // Wait for the cocoSsd model to load, then for the cam to load
      Promise.all([loadModel, loadCam]) // wait for loading the coco-ssd model & the cam feed, then call detectutility with the vidref and results
      .then(
        res => {
          detectUtility(vidRef.current, res[0]) // build guesses on each image from the feed
        }
        )
      .catch(
        err => console.error(`Error loading the models / cam ${err}`));
    }
    else {
      alert('You should probably download Chrome buddy');
    }
  });

  // Render the feed & app
  return (
    <>
      <video
        ref={vidRef}
        className='app-position'
        autoPlay
        playsInline
        muted
        width={windowWidth}
        height={windowHeight}
      />
      <canvas
        ref={canvasRef}
        className='app-position'
        width={windowWidth}
        height={windowHeight-100}
      />
    </>
    );
}
export default App;