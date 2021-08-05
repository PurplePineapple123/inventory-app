var express = require('express');
var router = express.Router();

var mfg_controller = require('../controllers/mfgController');


//MFG
// GET request for creating a Mfg. NOTE This must come before routes that display Mfg (uses id).
router.get('/create', mfg_controller.mfg_create_get);

// POST request for creating Mfg.
router.post('/create', mfg_controller.mfg_create_post);

// GET request to delete Mfg.
router.get('/:id/delete', mfg_controller.mfg_delete_get);

// POST request to delete Mfg.
router.post('/:id/delete', mfg_controller.mfg_delete_post);

// GET request to update Mfg.
router.get('/:id/update', mfg_controller.mfg_update_get);

// POST request to update Mfg.
router.post('/:id/update', mfg_controller.mfg_update_post);

// GET request for one Mfg.
router.get('/:id', mfg_controller.mfg_detail);

// GET request for list of all Mfg items.
router.get('/', mfg_controller.mfg_list);

module.exports = router;
