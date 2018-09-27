const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../../passport');
const bcrypt = require('bcryptjs');
const db = require('../../db/dbConfig');

function generateToken(payload) {
  return jwt.sign(payload, 'SOME_DUMB_SHIT', {
    expiresIn: '1h',
  });
}

router.post('/register', (req, res, next) => {
  let { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) return next({ code: 400 });
  password = bcrypt.hashSync(password, 10);
  return db('users')
    .insert({ username, password })
    .then(ids => {
      let id = ids[0];
      let token = generateToken({ id });
      res.json({ id, token, username });
    });
});

router.post('/login', (req, res, next) => {
  let { username, password } = req.body;
  console.log(username, password);
  if (!username || !password) {
    return next({ code: 404 });
  }
  return db('users')
    .where({ username })
    .first()
    .then(user => {
      console.log(user);
      if (res && bcrypt.compareSync(password, user.password)) {
        const token = generateToken({ id: user.id });

        res.json({ token });
      } else next({ code: 400 });
    })
    .catch(next);
});
// passport.authenticate('jwt', { session: false }, (err, user, info) => {
//   if (err || !user) {
//     return next({ code: 400 });
//   }

//   req.login(user, { session: false }, err => {
//     if (err) {
//       res.send(err);
//     }

//     const token = jwt.sign(user, 'SOME_DUMB_SHIT');
//     return res.json({ user, token });
//   });
// });

module.exports = router;
