// next is a function that we call when the middleware is finished running
// after this middleware finishes, it will call next and passes on the request to the next middleware
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }
  next();
};
