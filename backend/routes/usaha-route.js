const express = require('express')
const route = express.Router()

route.post('/', createUsaha);
route.get('/', getAllUsaha);
route.get('/:id', getUsahaById);
route.put('/:id', updateUsaha);
route.delete('/:id', deleteUsahaById);
route.delete('/', deleteAllUsaha);

module.exports = route