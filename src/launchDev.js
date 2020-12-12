const net = require('net');

//-100 from port due to foreman dynamically changing ports for processes of different types.
const port = process.env.PORT ? (process.env.PORT - 100) : 3000; 

//Set enviroment variable for localhost with a dynamic port
//This will also be used in Electron to tell if we are running on dev
process.env.ELECTRON_START_URL = `http://localhost:${port}`;

//Use a socket to test for connection to react server
const client = new net.Socket();

let startedElectron = false;
//Try connection to React dev server
const tryConnection = () => client.connect({port: port}, () => {
        //Close connection
        client.end();

        if(!startedElectron) {
            console.log('starting electron...');
            startedElectron = true;

            //import the exec function from node and run electron
            const exec = require('child_process').exec;
            exec('npm run electron');
        }
    }
);

tryConnection();

client.on('error', (error) => {
    setTimeout(tryConnection, 1000);
});