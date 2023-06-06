// main.js

const { app, BrowserWindow } = require('electron')

function createWindow() {
  // Create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Load the index.html file
  win.loadFile('index.html')

  // Open the DevTools in development mode
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools()
  }
}

// When Electron has finished initializing and is ready to create browser windows
app.whenReady().then(() => {
  createWindow()

  // Create new windows when the Dock icon is clicked on macOS
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
