const express = require('express');
const router = express.Router();

router.get('/:id?', function (req, res){
    res.send([]);

});

router.post('/', function (req, res){
  res.send({});


});
router.put('/:id?', function (req, res){
  res.send({});


});

router.delete('/:id?', (req, res) => {
  res.send({});
   })

module.exports = router;