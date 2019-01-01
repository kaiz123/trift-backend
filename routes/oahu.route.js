const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const oahu_controller = require('../controllers/oahu.controller.js');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', oahu_controller.oahu);
module.exports = router;