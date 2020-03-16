const path = require('path');
const express = require('express');

const producConroller = require('../controllers/products');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', producConroller.getaddProduct);

// /admin/add-product => POST
router.post('/add-product', producConroller.postNewProduct);

exports.routes = router;
