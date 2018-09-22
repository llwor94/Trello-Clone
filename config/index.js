const boardRoutes = require('./routes/boardRoutes');
const { errorHandler } = require('./middleware');

module.exports = server => {
  server.use('/api/boards', boardRoutes);
  server.use(errorHandler);
};
