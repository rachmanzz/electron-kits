const ipc = require('electron').ipcMain
class broadcaster {
  constructor (win){
    this.win = win
  }
  get (on, callback) {
    ipc.on(on, (ev, data) => {
      // ev = event
      if (typeof callback !== 'undefined' && typeof callback === 'string') {
        if (/[\w\/_]+\.[\w\/_]+/.test(callback)) {
          const coExp = callback.match(/([\w\/_]+)\.([\w\/_]+)/i)
          return
        }
      } else {
        typeof callback !== 'undefined' && typeof callback !== 'function' && callback(ev, data)
      }
    })
  }
}
