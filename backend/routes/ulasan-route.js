const express = require('express')
const route = express.Router()

route.post('/', createUlasan);
route.get('/', getAllUlasan);
route.get('/:id', getUlasanById);
route.put('/:id', updateUlasanById);
route.delete('/:id', deleteUlasanById);
route.delete('/', deleteAllUlasan);

module.exports = route