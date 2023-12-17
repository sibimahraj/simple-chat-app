# React Simple Chat Application

This is a simple chat application built with React, Redux, and Socket.io for real-time communication.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Node.js: [Download and install Node.js](https://nodejs.org/)

### Installing

1. Clone the repository:

 2. Install dependencies:
   *Client (React Application):
react: JavaScript library for building user interfaces.
react-dom: React package for working with the DOM.
react-redux: Official React bindings for Redux, used for state management.
socket.io-client: Socket.io client for real-time communication.

     *Server (Socket.io):
    socket.io: Real-time bidirectional event-based communication library.

    FontAwesome Icons:
@fortawesome/fontawesome-free: Font Awesome library for icons.

Installation:
# Inside the 'client' directory
npm install react react-dom react-redux redux redux-thunk socket.io-client

# Inside the 'server' directory
npm install express http socket.io

# For development
npm install --save-dev nodemon concurrently

# For FontAwesome Icons
npm install @fortawesome/fontawesome-free
Additional Notes:
Make sure to include the FontAwesome stylesheets while you are running the code.
#How to run the server
Open a new terminal type node server.js
