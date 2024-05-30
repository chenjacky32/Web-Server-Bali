import Hapi from '@hapi/hapi';
import Routes from './src/routes/routes.js';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: true,
    },
  });

  server.route(Routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
