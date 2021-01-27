const mongoose = require('mongoose');

const bootstrap = () =>
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    keepAlive: 1,
  });

const onError = (error) => {
  console.log(error)
  throw new Error('failed to connect with mongodb');
};

mongoose.connection.on('disconnect', () => {
  console.log('[MONGO]: Disconnected');
  bootstrap();
});

mongoose.connection.on('error', onError);

module.exports = { bootstrap };
