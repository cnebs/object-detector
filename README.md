# Object Detector

Combining TensorFlow.js and coco-ssd modeling on React.js to build a web-interface for live cam-feed image object recognition. This project simply applies the object detection model used on single images to multiple images in the form of a video feed using React.js.

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

Use this script to see a live version

```
npm run start
```

## Deployment

The live demo of this app is deployed using gh-pages, [right here](https://cnebs.github.io/object-detector).
You can run
```npm run predeploy``` then ```npm deploy``` to push to your gh-pages homepage, defined in your package.json.

## Built With

* [Tensorflow.js](https://www.npmjs.com/package/@tensorflow/tfjs) - The library for training machine learning models
* [coco-ssd detection model](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) - The object detection model used with tensorflow on the images produced by the cam feed
* [React.js](https://reactjs.org/) - Used on the front-end
* [Express.js](https://expressjs.com/) - Used on the back-end

## Authors

* **Charles Neblett** - [GitHub](https://github.com/cnebs).

## Acknowledgments

This project was only possible with tensorflow.js and its detection model. This project simply applies and builds a web app with the machine learning built with these on multiple images to mimic live object-detection using an environment-facing camera. 