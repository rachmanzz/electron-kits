const ipc = require('electron').ipcMain
const control = {}
class Broadcaster {
  constructor (){}
  setWindow (win) {
      this.win = win
  }
  get (on, callback) {
    ipc.on(on, (ev, data) => {
      // ev = event
      if (typeof callback !== 'undefined' && typeof callback === 'string') {
        if (/[\w\/_]+\.[\w\/_]+/.test(callback)) {
          const fileExp = callback.match(/([\w\/_]+)\.([\w\/_]+)/i)
          if (typeof control[fileExp[1]] === 'undefined') {
            const Modules = require(
              './Controls/' + fileExp[1]
            )
            control[fileExp[1]] = new Modules(this.win)
          }
          control[fileExp[1]][fileExp[1]](ev, data) // call method
          return
        }
      } else {
        typeof callback !== 'undefined' && typeof callback !== 'function' && callback(ev, data)
      }
    })
  }
}

module.exports = Broadcaster
