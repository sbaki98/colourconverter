const io = require('socket.io-client');
var constants = require('./constants');

// Constants
const PORT = constants.PORT;
const HOST = constants.HOST;

const socketClient = io.connect(`http://${HOST}:${PORT}`); // Specify port if your express server is not using default port 80

socketClient.on('connect', () => {
  socketClient.emit('npmStop');
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});
