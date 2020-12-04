const net = require('net');
//-100 from port due to foreman dynamically changing ports for processes of different types.
const port = process.env.PORT ? (process.env.PORT - 100) : 3000; 

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

//Use a socket to test for connection to express server
const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({port: port}, () => {
        client.end();
        if(!startedElectron) {
            console.log('starting electron');
            startedElectron = true;
            const exec = require('child_process').exec;
            exec('npm run electron');
        }
    }
);

tryConnection();

client.on('error', (error) => {
    setTimeout(tryConnection, 1000);
});