// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, ipcMain} = require('electron');
const fs = require('fs');
const path = require('path');
const reactDevTools = require('electron-react-devtools');

const reactURL = process.env.ELECTRON_START_URL || url.format({
  pathname: path.join(__dirname, '/../build/index.html'),
  protocol: 'file:',
  slashes: true
});

let mainWindow;

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight:  200,
    title:"Fizz Nizzard's Spell Book",
    webPreferences: {
      nodeIntegration: true
    }
  })
  //Start Maximized
  mainWindow.maximize();

  // and load the index.html of the app.
  mainWindow.loadURL(reactURL)

  //Load spells and slots data from file
  mainWindow.webContents.on('did-finish-load', ()=>{
    fs.readFile(path.resolve(__dirname, './data/spells.json'), (err, spells) =>{
      if(err) {
        mainWindow.webContents.send('error', err);
      }
      else{
        let spellList = JSON.parse(spells);
        mainWindow.webContents.send('spell:list', spellList);
      }
    })
  })

  //DEBUG MENU
  let menu = Menu.buildFromTemplate(debugMenu);
  Menu.setApplicationMenu(menu)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  session.loadExtension('C:\\Users\\snake\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi');
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

//Debug Menu
const debugMenu = [
  {
    label: "&Debug",
    click(){mainWindow.webContents.openDevTools();}
  },
  {
    role: 'reload'
  }
];

// IPC event "spells:save": Will be received from the render process and contain a full spell list
ipcMain.on("spells:save", (event, spells)=>{
  fs.writeFile(path.resolve(__dirname, './data/spells.json'), JSON.stringify(spells), error => {

  });
});