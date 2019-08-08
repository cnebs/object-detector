# Object Detector

Combining TensorFlow.js and coco-ssd modeling on React.js to build a web-interface for live cam-feed image object recognition. This project simply applies the object detection model used on single images to multiple images in the form of a video feed using React.js.

*Interested in training the model more? Tensorflow has a js guide to get you started with classifying images [right here](https://codelabs.developers.google.com/codelabs/tensorflowjs-teachablemachine-codelab/index.html#0).*

<p align="center">
  <img width="250" height="400" src="https://media.giphy.com/media/Kco2VgLAQ0SBz4mMFk/giphy.gif">
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Node.js
* NPM

### Installing

Download the modules

```
npm install
```
To see a live, local version

```
npm run start
```

## Deployment

* The live demo of this app is deployed using gh-pages, [right here](https://cnebs.github.io/object-detector).

To publish to gh-pages
```
npm run predeploy
``` 
```
npm run deploy
``` 
This will push to your gh-pages homepage defined in your package.json

## Built With

* [Tensorflow.js](https://www.npmjs.com/package/@tensorflow/tfjs) - The library for training machine learning models
* [coco-ssd detection model](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) - The object detection model used with tensorflow on the images produced by the cam feed
* [React.js](https://reactjs.org/) - Used on the front-end
* [Express.js](https://expressjs.com/) - Used on the back-end

## Authors

* **Charles Neblett** - [GitHub](https://github.com/cnebs).

## Acknowledgments

This project was only possible with tensorflow.js and its detection model. This project simply applies and builds a web app with the machine learning built with these on multiple images to mimic live object-detection using an environment-facing camera. 