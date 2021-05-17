const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");

// const { environment } = require('src/environments/environment.ts');

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // // console.log("process.env : ", process)

    // // Debug
    // if (!environment.production) {
    //     mainWindow.loadURL(
    //         url.format({
    //             pathname: require('path').join(__dirname, 'dist/index.html'),
    //             protocol: 'file:',
    //             slashes: false
    //         })
    //     )

    //     // Open the DevTools.
    //     mainWindow.webContents.openDevTools()
    // } else {	//Enter when packaged into exe runtime
    //     mainWindow.loadFile('dist/index.html')
    // }

    mainWindow.loadFile(path.join(__dirname, 'dist/index.html'))

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})