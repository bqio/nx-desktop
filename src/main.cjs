const { app, BrowserWindow } = require('electron')
const { join } = require('node:path')

const env = process.env.NODE_ENV || 'development'

if (env == 'development') {
  require('electron-reload')(__dirname, {
    electron: join(process.cwd(), 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit',
  })
}

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.cjs'),
    },
  })

  window.setMenu(null)

  window.loadFile(join(__dirname, 'web', 'index.html'))
}

app.on('ready', () => createWindow())
app.on('window-all-closed', () => app.quit())
