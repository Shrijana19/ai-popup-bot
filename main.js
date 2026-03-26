const { app, BrowserWindow, globalShortcut } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 300,
    alwaysOnTop: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile("index.html");
  win.hide();
}

app.whenReady().then(() => {

  createWindow();

  globalShortcut.register("CommandOrControl+Space", () => {
    if (win.isVisible()) {
      win.hide();
    } else {
      win.show();
    }
  });

});
