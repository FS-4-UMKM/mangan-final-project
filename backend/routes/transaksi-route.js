const express = require('express')
const route = express.Router()

route.post('/', createTransaksi);
route.get('/', getAllTransaksi);
route.get('/:id', getTransaksiById);
route.put('/:id', updateTransaksiById);
route.delete('/:id', deleteTransaksiById);
route.delete('/', deleteAllTransaksi);

module.exports = route