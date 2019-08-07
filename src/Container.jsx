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
      loading: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleLoading = this.handleLoading.bind(this);
  }

  handleClick() {
    this.setState({begin: true})
  }

  handleLoading(bool) {
    if (bool === false) {
      this.setState({loading: false})
    }
    else if (bool === true) {
      this.setState({loading: true})
    }
  }

  render() {
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
          <h3 id='header'>Object Detector</h3>
          <>
          {this.state.loading === true ? <span id='header'>Loading...</span> : <></>}
          <App />
          </>
        </Row>
      }
    </Container>
    )
  }

}