import React from 'react';
import App from './App.js';
import './Container.css';

export default class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      begin: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({begin: true})
  }

  render() {
    return (
    <div id='container'>
      {this.state.begin === false ? 
        <div>
          <h1 id='header-title'>Object Detector</h1>
          <hr></hr>
          <br></br>
          <a id='header' href='https://www.github.com/cnebs'>GitHub</a>
          <br></br>
          <div id='support-links'>
            <a id='header-links-1' href='https://www.npmjs.com/package/@tensorflow/tfjs'>Tensorflow.js</a>
            <a id='header-links-2' href='https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd'>Detection Model</a>
          </div>
          <div id='wrapper'>
            <button onClick={this.handleClick} type="button">Launch</button>
          </div>
        </div> :
        <div>
          <p></p>
          <h3 id='header'>Object Detector</h3>
          <hr></hr>
          <br></br>
          <>
            <App />
          </>
        </div>
      }
    </div>
    )
  }

}