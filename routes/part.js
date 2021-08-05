var express = require('express');
var router = express.Router();

var part_controller = require('../controllers/partController');

//PART

// GET part home page.
//router.get('/', part_controller.index);

// GET request for creating a Part. NOTE This must come before routes that display Part (uses id).
router.get('/create', part_controller.part_create_get);

// POST request for creating Part.
router.post('/create', part_controller.part_create_post);

// GET request to delete Part.
router.get('/:id/delete', part_controller.part_delete_get);

// POST request to delete Part.
router.post('/:id/delete', part_controller.part_delete_post);

// GET request to update Part.
router.get('/:id/update', part_controller.part_update_get);

// POST request to update Part.
router.post('/:id/update', part_controller.part_update_post);

// GET request for one Part.
router.get('/:id', part_controller.part_detail);

// GET request for list of all Part items.
router.get('/', part_controller.part_list);

module.exports = router;
