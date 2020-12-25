console.log('main process working');
console.log("main.js");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow(){
    win = new BrowserWindow({width :600, height:600, icon :'icon.png'});
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol : 'file',
        slashes: true
    }));

   // win.webContents.openDevTools();

    win.setMenuBarVisibility(false)
    win.on('closed',() =>{
        win = null;
    })
}

app.on('ready',createWindow);