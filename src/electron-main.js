// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, ipcMain} = require('electron');
const fs = require('fs');
const path = require('path');

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
    height: 800,
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
    let spellList;
    let spellSlots;
    
    //Access spells.json
    fs.access(path.resolve(__dirname, './data/spells.json'), fs.constants.F_OK, (error) => {
      //Spell File does not exist
      if(error){
        //Create file with empty array
        fs.writeFile(path.resolve(__dirname, './data/spells.json'),"[]", error =>{
          if(error){
            mainWindow.webContents.send('error', err);
          }
        });
        //apply empty array, stringified, to spellList
        spellList = JSON.parse('[]');
        mainWindow.webContents.send('spell:list', spellList);
      }
      //Spell File does exist
      else{
        fs.readFile(path.resolve(__dirname, './data/spells.json'), (error, spells) =>{
          //apply spells stringified to spellList
          spellList = JSON.parse(spells);
          mainWindow.webContents.send('spell:list', spellList);
        })
      }
    })

    //Access slots.json
    fs.access(path.resolve(__dirname, './data/slots.json'), fs.constants.F_OK, (error) => {
      //Slot File does not exist
      if(error){
        //Create file with empty array
        fs.writeFile(path.resolve(__dirname, './data/slots.json'),"{}", error =>{
          if(error){
            mainWindow.webContents.send('error', err);
          }
        });
        //apply empty array, stringified, to slotList
        slotList = JSON.parse('{}');
        mainWindow.webContents.send('slot:list', slotList);
      }
      //Spell File does exist
      else{
        fs.readFile(path.resolve(__dirname, './data/slots.json'), (error, slots) =>{
          //apply spells stringified to spellList
          slotList = JSON.parse(slots);
          mainWindow.webContents.send('slot:list', slotList);
        })
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

// IPC event "slots:save": Will be received from the render process and contain an object of spell slots 
//(levelXCurrent and levelXMax, where X is the spell level. For each spell level)
ipcMain.on("slots:save", (event, slots)=>{
  fs.writeFile(path.resolve(__dirname, './data/slots.json'), JSON.stringify(slots), error => {

  });
});