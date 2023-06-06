// renderer.js

// This file runs in the renderer process

// You can access Node.js APIs and Electron-specific APIs here

// For example, you can use the 'ipcRenderer' module to communicate with the main process
const { ipcRenderer } = require('electron')

// Send a message to the main process
ipcRenderer.send('message', 'Hello from renderer process!')

// Receive a message from the main process
ipcRenderer.on('reply', (event, arg) => {
  console.log(arg) // Output: 'Hello from main process!'
})
