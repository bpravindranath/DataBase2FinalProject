var express = require('express');
var router = express.Router();
var ctrlResource = require('../controllers/resource');



//Resource


router.get('/resource', ctrlResource.resourceListbyResource);
router.get('/resource/:resourceid', ctrlResource.resourceReadOne);

router.post('/resource', ctrlResource.resourceCreate);

router.put('/resource/:resourceid', ctrlResource.resourceUpdateOne);

router.delete('/resource/:resourceid', ctrlResource.resourceDeleteOne);


module.exports = router;