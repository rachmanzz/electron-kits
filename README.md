# electron kits
easy build electron desktop app

## Usage
Using Git:
`git clone https://github.com/rachmanzz/electron-kits-start.git yourproject`

`cd yourproject && npm install`

## Routing and Broadcast Message
File: App/Route


    const Bs = require('./Broadcaster')
    // defined window variable
    var w
    // callBroadcaster Class and make Route function
    const bs = new Bs(), Route = (ws) => {
      w = ws
      bs.setWindow(ws)
    }
    module.exports =  Route

    // routing here
    // bs.get('your-route', 'controlfile.method')
    // example
    bs.get('first-broadcast-route', 'First.run')


## Control
Paths: App/Controls/

Create File: App/Controls/First.js


    // example
    module.exports = class First {
      constructor (bs) {
        this.bs = bs
      }
      run (event, res) {
        // your logic code here
        // send to view
        e.sender.send('send-to-view-back', 'value')
      }
    }

## Broadcast Message
from Views html template, add javascript code in your html like this

    const ipc = require('electron').ipcRenderer
    // first-broadcast-route look at route
    // send Broadcast message
    ipc.send('first-broadcast-route', 'value')
    // get Broadcast message from control resource
    ipc.on('send-to-view-back', (e, data) => {
      console.log(data)
    })

## Vue integations

change folder Config to config

`npm install --global vue-cli`

`vue init webpack ./`

`npm install`

### vue configuration

`add "main": "config/main.js" to package.json`

config/index.js

change this line:


    build: {
    index: path.resolve(__dirname, '../Views/Index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../Views'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '',


build/webpack.prod.conf.js

add this line:

  `target: 'electron-renderer',`
