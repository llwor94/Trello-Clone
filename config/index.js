const boardRoutes = require('./routes/boardRoutes');
const listRoutes = require('./routes/listRoutes');
const { errorHandler } = require('./middleware');

module.exports = server => {
  server.use('/api/boards', boardRoutes);
  server.use('/api/lists', listRoutes);
  server.use(errorHandler);
};
