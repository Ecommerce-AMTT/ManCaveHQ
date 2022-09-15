const jwt = require('jsonwebtoken');

const secret = 'TfcIELfsRhKISbk6hcBnVTRW7l9V4zCHusN8RZuWE1pIn4Ea29qQ/X//KGT8oyzCrRNhxZL8ioUelo2TsFADAA';
const expiration = '5m';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      return
    }

    return req;
  },
  signToken: function ({ userName, email, _id }) {
    const payload = { userName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
