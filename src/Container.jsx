import React from 'react';
import App from './App.js';
import './Container.css';
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

export default class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      begin: false,
      loading: false,
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
    <Container id='container'>
      {this.state.begin === false ? 
        <Row>
          <h1 id='header-title'>Object Detector</h1>
          <a id='header' href='https://www.github.com/cnebs'>My GitHub</a>
          <br></br>
          <a id='header' href='https://www.npmjs.com/package/@tensorflow/tfjs'>Tensorflow.js</a>
          <br></br>
          <a id='header' href='https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd'>Detection Model</a>
          <div id='wrapper'>
            <Button onClick={this.handleClick} variant="primary">Launch</Button>
          </div>
        </Row> :
        <Row>
          <p></p>
          <h2 id='header'>Object Detector</h2>
          <div>
            {/* {JSON.stringify(this.state.guessData)} */}
          </div>
          <div id='canvas'>
            <App 
            handleGuess={this.handleGuess}
            handleCountFrames={this.handleCountFrames}
            framesProcessed={this.state.framesProcessed}
            />
          </div>
        </Row>
      }
    </Container>
    )
  }

}