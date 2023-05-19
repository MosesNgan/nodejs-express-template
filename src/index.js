const app = require('./app');
const { env, port } = require('./config/config');

app.listen(port, () => {
  console.log(`[${env}] Listening to port ${port}`);
});
