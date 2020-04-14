const express = require('express');
const router = express.Router();

// How this works, is that whenever anyone visits the '/' route, this callback function will run. 
// This function gives you 3 things,
// the request, which is an object full of informationt that's coming in.
// the response, which is an object full of methods for sending data back to the user. 
// next (which we will review in the middleware file.)

router.get('/', (req, res) => {
  // res.send('Hey! It works!'); ... to send info back to the user.

  // const lauren = {name: 'Lauren', bhadBitch: 'indeed'};
  // res.json(lauren)... to render some json to the user.

  // res.send(req.query.name);... to render query params from the url.
  // req.query is an object full of the query params.

});

// there's lots of methods on the res object which we can use. 
// res.send and res.json are probs the most common.

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('')
  res.send(reverse);
})
  // to put variables in a route, you use colons. The above will give us a name variable on each 
  // of our requests. 


module.exports = router;
