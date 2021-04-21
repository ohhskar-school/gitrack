const jwt = require('jsonwebtoken');
const debug = require('debug')('backend:middlewares-auth');

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

function authJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    req.user = jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        debug(err);
        return false;
      }

      return user;
    });

    if (req.user) {
      return next();
    }

    return res.status(403).json({ error_message: 'TOKEN_INVALID' });
  }

  return res.status(403).json({ error_message: 'AUTH_NOT_FOUND' });
}

module.exports = {
  authJWT,
};
