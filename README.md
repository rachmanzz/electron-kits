# electron-kits-start
easy build electron desktop app

## Usage
Using NPM:
`npm install rachmanzz/electron-kits-start`

Using Git:
`git clone https://github.com/rachmanzz/electron-kits-start.git`

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
      }
    }
