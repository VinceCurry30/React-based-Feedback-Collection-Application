const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  // didn't invoke requireLogin, because we don't want to execute the middleware the instance express loads up
  // we must have one function in the route handler that process the request and send back a response
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // returns a promise, so we can use async await syntax
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });
    // when we make use of passport, we can access the current user model as req.user (automatically set by passport)
    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
