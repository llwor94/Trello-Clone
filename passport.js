const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const db = require('./db/dbConfig');

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'SOME_DUMB_SHIT',
    },
    function(jwtPayload, cb) {
      return db('users')
        .where('id', jwtPayload.id)
        .then(user => {
          return cb(null, user);
        })
        .catch(err => {
          return cb(err);
        });
    },
  ),
);

module.exports = passport;

// const authenticate = (req, res, next) => {
//   let authenticated = passport.authenticate('jwt', (err, user) => {
//     if (err || !user) return res.json(err);
//     next();
//   });
//   authenticated(req, res, next);
// };
