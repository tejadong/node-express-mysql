import Server from './src/server/server';
import router from './src/routes/router';
import MySQL from './src/mysql/mysql';

const server = Server.init(3000);
server.app.use(router);

// MySQL.instance;

server.start( () => {
    console.log('Servidor corriendo en el puerto 3000');
});