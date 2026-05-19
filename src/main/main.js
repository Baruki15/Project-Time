const { app, BrowserWindow, ipcMain } = require(`electron`)
const path = require('path')

const createWindows = () => {

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        contextIsolation: true,
        nodeIntegration: false
    })

        ipcMain.on(
        "window:minimize",
        () => {

            win.minimize();
        }
    );

    ipcMain.on(
        "window:maximize",
        () => {

            if (win.isMaximized()) {

                win.unmaximize();

            } else {

                win.maximize();
            }
        }
    );

    ipcMain.on(
        "window:close",
        () => {

            win.close();
        }
    );

    win.loadFile(path.join(__dirname, '../renderer/index.html'))
}


app.whenReady().then(()=> {
    createWindows()

    app.on('activate', ()=> {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindows()
        }
    })
})

app.on('window-all-closed', ()=> {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})