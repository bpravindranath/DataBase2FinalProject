var express = require('express');
var router = express.Router();
var ctrlResource = require('../controllers/resource');
var ctrlOthers = require('../controllers/others')

/* GET Location pages. */
router.get('/resource', ctrlResource.resourceList);
router.get('/resource/:resourceid', ctrlResource.resourceInfo);


router.get('/resource/add/new', ctrlResource.resourceAdd);
router.post('/resource/add/new', ctrlResource.resourcePost);



/* GET Other page. */
router.get('/', ctrlOthers.home);
router.get('/about', ctrlOthers.about);



module.exports = router;
