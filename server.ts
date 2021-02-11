import http from 'http';
import debug from 'debug';
import models, { connectDb } from './src/models';
import { app } from './src/app';
import { normalizePort } from './src/utils';

const server = http.createServer(app);
const port = normalizePort(process.env.PORT);

connectDb().then(async () => {
    if (process.env.eraseDatabaseOnSync) {
        await Promise.all([models.Main.deleteMany({})]);
      }
  server.listen(port, () => console.log(`Server running on port ${port}!`));
});

server.on('error', (error: any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
})
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
})
