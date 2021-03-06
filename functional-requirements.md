# Functional Requirements
 - [X] Primarily a client-side SPA (single-page app) built with ReactJS
 - [X] Based on the HTML and CSS provided
 - [X] Contains a chat log displaying messages and notifications
 - [X] Contains an input field to change your name and an input field to send a message
 - [X] The client-side app communicates with a server via WebSockets for multi-user real-time updates
 - [X] No persistent database is involved; the focus is on the client-side experience
## Behaviour Requirements
 - [X] When any connected user sends a chat message, all connected users receive and display the message
 - [X] When any connected user changes their name, all connected users are notified of the name change
 - [X] Notifications are styled differently from chat messages
 - [X] Header will display the count of connected users
 - [X] When the number of connected users changes, this count will be updated for all connected users
 - [X] (STRETCH) Different users' names will each be coloured differently
 - [X] Bonus: the colouring is consistent between connected user instances or is calculated algorithmically based on their name, or is manually selectable by users, or any other interesting approach!
 - [X] (STRETCH) User's who submit images (jpg/png/gif) will be rendered in page.
 
## Technical Specifications
### Stack:

 - Webpack with Babel, JSX, ES6, webpack dev server (comes with boilerplate)
 - WebSockets using Node package ws on the server-side, and native WebSocket on client side
 - ReactJS

### React component guidelines:

 - [X] A single root component (e.g. App) should be responsible for the main application state, as well as communication with the WebSocket server
 - [X] A message list component renders the chat log (chat messages and system notifications)
 - [X] A chat bar component provides an input field for changing your username and an input field for sending messages. These input fields do not need to be React-style "controlled inputs", although they can be.

### Client websocket behaviour:

 - [X] opens a websocket connection as soon as the App component is mounted
the connection stays open until the client closes the page (or otherwise disconnects)
 - [X] sends chat messages and (name change) notifications initiated by the current user
 - [X] handles broadcast messages (chat, notifications, user count) from the server and may alter state accordingly

### Websocket server specs:

 - [X] The Chatty client app and Chatty websocket server are separate Node apps each with their own package.json

 - [X] It's a simple server using express and ws
 - [X] The server should send and receive JSON-encoded messages
 - [X] When a client sends a message:
the server should determine what to do based on the message's type property
it should construct a message to send back in response with a corresponding type and a generated unique id (e.g. a UUID)
 - [X] When a client connects or disconnects, the server should broadcast the current user count to all connected clients
 - [X] (STRETCH) the server may assign and/or keep track of user colours (there are several ways of solving this)