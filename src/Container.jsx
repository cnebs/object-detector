import React from 'react';
import App from './App.js';
import './Container.css';
import spinner from './assets/spinner-red.gif'

export default class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      begin: false,
      loading: true,
      framesProcessed: 0,
      guessData: {
      }
    }
    this.handleClick = this.handleClick.bind(this);
    // this.handleGuess = this.handleGuess.bind(this);
    // this.handleCountFrames = this.handleCountFrames.bind(this);
  }

  componentDidMount() {
    // setInterval(() => this.setState({framesProcessed: this.state.framesProcessed+1}), 500)
  }

  handleClick() {
    this.setState({begin: true})
    setTimeout(() => {
      this.setState({loading: false})
    }, 5000);
  }

  // handleCountFrames() {
  //   this.setState({framesProcessed: this.state.framesProcessed+1});
  // }
  
  // handleGuess(discriminations) {
    // // {class: "refrigerator", score: 0.5058758854866028}

    // if (this.state.framesProcessed % 10 === 0) {
    //   let guessData = this.state.guessData;
    //   discriminations.forEach( guess => {
    //     guessData[guess.class] = guess.class;
        // console.log(guess)
        // if (this.state.guessData[guess.class]) {
        //   let guessData = this.state.guessData;
        //   guessData[guess.class] = [
        //     (this.state.guessData[guess.class][0] + 1),
        //     (Number(this.state.guessData[guess.class][1]) + Number((guess.score*100).toFixed(3)))
        //   ]
        //   this.setState({guessData : guessData})
        // }
        // else if (!this.state.guessData[guess.class]) {
        //   let guessData = this.state.guessData;
        //   guessData[guess.class] = [1, (Number(guess.score*100).toFixed(3))]
        //   this.setState({guessData : guessData})
        // }
      // })
  //     this.setState({guessData: guessData})
  //     console.log(this.state.framesProcessed, this.state.guessData);
  //   }
  // }

  render() {
    // console.log(this.state.guessData)
    console.log(this.state.framesProcessed);
    return (
    <div id='container'>

      {this.state.begin === false ?
      // Landing Page
        <div>
            <h1 id='header-title'>Object Detector</h1>
          <hr id='first-hr'></hr>
          <br></br>
            <a id='header' href='https://www.github.com/cnebs'>Project GitHub</a>
          <br></br>
            <span id='header'>Still image detection powered by:</span>
          <br></br>
            <div id='support-links'>
              <a id='header-links-1' href='https://www.npmjs.com/package/@tensorflow/tfjs'>Tensorflow.js</a>
              <span id='header'>|</span>
              <a id='header-links-2' href='https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd'>Detection Model</a>
            </div>
          <div id='wrapper'>
            <button onClick={this.handleClick} type="button">Launch</button>
          </div>
          <hr id='second-hr'></hr>
          <br/>
          <br/>
          <span id='header'>Want to train your own image classifyer?</span>
          <br></br>
          <a id='header' href='https://codelabs.developers.google.com/codelabs/tensorflowjs-teachablemachine-codelab/index.html#6'>Tensorflow tutorial</a>
        </div> :

        // App Page
        <div>
          <h3 id='header'>Object Detector</h3>
          <hr id='first-hr'></hr>
          <>
            {this.state.loading === true ? 
            <span id='header'><img src={spinner} alt="loading ..." /></span> : 
            <></>}
            <App 
              handleGuess={this.handleGuess} 
              handleCountFrames={this.handleCountFrames}
              framesProcessed={this.state.framesProcessed}
            />
          </>
        </div>
      }
    </div>
    )
  }

}