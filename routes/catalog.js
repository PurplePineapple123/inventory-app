var express = require('express');
var router = express.Router();

var mfg_controller = require('../controllers/mfgController');
var part_controller = require('../controllers/partController');
var category_controller = require('../controllers/categoryController');


//PART

// GET part home page.
router.get('/', part_controller.index);

// GET request for creating a Part. NOTE This must come before routes that display Part (uses id).
router.get('/part/create', part_controller.part_create_get);

// POST request for creating Part.
router.post('/part/create', part_controller.part_create_post);

// GET request to delete Part.
router.get('/part/:id/delete', part_controller.part_delete_get);

// POST request to delete Part.
router.post('/part/:id/delete', part_controller.part_delete_post);

// GET request to update Part.
router.get('/part/:id/update', part_controller.part_update_get);

// POST request to update Part.
router.post('/part/:id/update', part_controller.part_update_post);

// GET request for one Part.
router.get('/part/:id', part_controller.part_detail);

// GET request for list of all Part items.
router.get('/part', part_controller.part_list);


//CATEGORY
// GET request for creating a Category. NOTE This must come before routes that display Category (uses id).
router.get('/category/create', category_controller.category_create_get);

// POST request for creating Category.
router.post('/category/create', category_controller.category_create_post);

// // GET request to delete Category.
router.get('/category/:id/delete', category_controller.category_delete_get);

// POST request to delete Category.
router.post('/category/:id/delete', category_controller.category_delete_post);

// GET request to update Category.
router.get('/category/:id/update', category_controller.category_update_get);

// POST request to update Category.
router.post('/category/:id/update', category_controller.category_update_post);

// GET request for one Category.
router.get('/category/:id', category_controller.category_detail);

// GET request for list of all Category items.
router.get('/category', category_controller.category_list);


//MFG
// GET request for creating a Mfg. NOTE This must come before routes that display Mfg (uses id).
router.get('/mfg/create', mfg_controller.mfg_create_get);

// POST request for creating Mfg.
router.post('/mfg/create', mfg_controller.mfg_create_post);

// GET request to delete Mfg.
router.get('/mfg/:id/delete', mfg_controller.mfg_delete_get);

// POST request to delete Mfg.
router.post('/mfg/:id/delete', mfg_controller.mfg_delete_post);

// GET request to update Mfg.
router.get('/mfg/:id/update', mfg_controller.mfg_update_get);

// POST request to update Mfg.
router.post('/mfg/:id/update', mfg_controller.mfg_update_post);

// GET request for one Mfg.
router.get('/mfg/:id', mfg_controller.mfg_detail);

// GET request for list of all Mfg items.
router.get('/mfg', mfg_controller.mfg_list);

module.exports = router;
