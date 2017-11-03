# Chatty App

Chat application using React and WebSockets. 

## Installation

1. After cloning open both chatty-client and chatty-server and run `npm install` in BOTH directories.
2. If desired, change the PORT in chatty-server/server.js, chatty-client/server.js, chatty-client/src/app.js, and chatty-client/webpack.config.js
3. Start both servers using `npm start` in both directories
4. Visit the client server port in your browser.

## Dependencies

### Server

  - express
  - randomcolor
  - uuid
  - ws

### Client

  - babel-core
  - babel-loader
  - babel-plugin-transform-class-properties
  - babel-preset-es2015
  - babel-preset-react
  - babel-preset-stage-0
  - css-loader
  - node-sass
  - sass-loader
  - sockjs-client
  - style-loader
  - webpack
  - webpack-dev-server
  - react
  - react-dom

  ## Screenshots

![Screenshot of Chatty App](Chatty/docs/Chatty-App-Screenshot.png)

### Functional Requirements Kept in functional-requirements.md