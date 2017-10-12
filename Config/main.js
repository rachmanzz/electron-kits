const Route = require('../App/Route')
const Start = require('../start')
const {app, BrowserWindow, Menu} = require('electron')

const main = () => {
  var win = new BrowserWindow(Start.window)
  Start.run(win)
  win.webContents.on('did-finish-load', () => {
      Route.setWindow(win)
  })
}
app.on('ready', main)
