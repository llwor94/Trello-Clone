const boardRoutes = require('./routes/boardRoutes');
const listRoutes = require('./routes/listRoutes');
const cardRoutes = require('./routes/cardRoutes');
const authRoutes = require('./routes/authRoutes');
require('../passport');
const { errorHandler } = require('./middleware');

module.exports = server => {
  server.use('/api/auth', authRoutes);
  server.use(
    '/api/boards',
    passport.authenticate('jwt', { session: false }),
    boardRoutes,
  );
  server.use(
    '/api/lists',
    passport.authenticate('jwt', { session: false }),
    listRoutes,
  );
  server.use(
    '/api/cards',
    passport.authenticate('jwt', { session: false }),
    cardRoutes,
  );
  server.use(errorHandler);
};
