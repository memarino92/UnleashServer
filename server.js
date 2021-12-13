const unleash = require('unleash-server');

unleash
  .start({
    db: {
      ssl: process.env.DB_SSL === 'true',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    server: {
      port: process.env.SERVER_PORT,
    },
  })
  .then((unleash) => {
    console.log(
      `Unleash started on http://localhost:${unleash.app.get('port')}`
    );
  });
