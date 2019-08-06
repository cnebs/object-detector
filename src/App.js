import React, {useRef, useEffect} from 'react';
import './App.css';
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const App = (props) => {
  // promised loading model 
  const loadModel = cocoSsd.load('mobilenet_v2');

  // Refs
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const canvasRef = useRef(null);
  const vidRef = useRef(null);

  // Utils
  const detectUtility = (video, model) => {
    model.detect(video)
      .then(discriminations => {
        buildRectangle(discriminations);
    });

    requestAnimationFrame(() => detectUtility(video, model));
  };

  const buildRectangle = discriminations => {
    // !!!!
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    // !!!!

    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Build the rectable styling
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.textBaseline = 'bottom';
    ctx.font = 'italic 12px sans-serif';

    discriminations.forEach(guess => {
      // label each guess on the rectangle with a name & confidence
      const guessText = `${guess.class}`;
      const textWidth = ctx.measureText(guessText).width;
      const textHeight = parseInt(ctx.font, 10);
      ctx.strokeRect(guess.bbox[0], guess.bbox[1], guess.bbox[2], guess.bbox[3]);
      ctx.fillStyle = '#F00';
      ctx.fillRect( 
        guess.bbox[0]-ctx.lineWidth/2, 
        guess.bbox[1], 
        textWidth + ctx.lineWidth, 
        -textHeight);
      ctx.fillStyle = '#FFF'
      ctx.fillText(guessText, guess.bbox[0], guess.bbox[1]);
    });
  };

  // Start the app when it updates
  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    // Define the rules for the mediaDevices
    const rules = {
      audio: false,
      video: {facingMode: 'environment'}
    };

    // Can user use cam? Can user access on browser?
    console.log(navigator)
    if (navigator.mediaDevices.getUserMedia) {
      const loadCam = navigator.mediaDevices.getUserMedia(rules)
      .then(stream => {
        vidRef.current.srcObject = stream;
        return new Promise(resolve => vidRef.current.onloadedmetadata = resolve);
      })
      .catch(err => {
        alert(`Please allow the browser to access your device's camera!`)
      });

      // Wait for the cocoSsd model to load, then for the cam to load
      Promise.all([loadModel, loadCam])
      .then(
        res => {
          detectUtility(vidRef.current, res[0])
        }
        )
      .catch(
        err => console.error(`Error loading the models / cam ${err}`));
    }
    else {
      alert('You should probably download Chrome(ium) to fix this');
    }
  });

  // Render the app
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
        height={windowHeight}
      />
    </>
    );
}
export default App;