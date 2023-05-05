const DevController = require('./controllers/DevController')
const express = require('express')

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: `Hello ${req.query.name}` })
});

routes.post('/devs', DevController.store);

module.exports = routes;