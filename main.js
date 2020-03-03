const electron = require("electron");

const { app, BrowserWindow } = electron;

let window;

app.on("ready", () => {
  window = new BrowserWindow({
    width: 400,
    height: 340,
    webPreferences: {
      nodeIntegration: true
    }
  });
  window.loadFile("index.html");
});


