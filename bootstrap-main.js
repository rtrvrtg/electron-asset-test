'use babel';

const electron = require('electron');
const app = electron.app;
const browserWindow = electron.BrowserWindow;
let mainWindow;

app.on('ready', _createMainWindow);
app.on('window-all-closed', _onWindowAllClosed);
app.on('activate', _onActivate);

function _createMainWindow() {
  mainWindow = new electron.BrowserWindow({width: 800, height: 600})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null;
  })
}

function _onWindowAllClosed() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}

function _onActivate() {
  if (mainWindow === null) {
    _createMainWindow()
  }
}
