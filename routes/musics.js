var express = require('express');
var router = express.Router();
var fileDB = require('../db');
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send(fileDB);
});

router.post('/', function (req, res, next) {
  console.log(fileDB);
    var musItem = {...req.body, id: Date.now()};
    fileDB.push(musItem);
    res.send(musItem);
});

router.get('/:id', function (req, res) {
  var musicItem = fileDB.find(function (musicItem) {
      console.log(req.params.id)
        return musicItem.id === +(req.params.id)
    });
  res.send(musicItem);
});

router.put('/:id', function (req, res) {
    var musicItem = fileDB.find(function (musicItem) {
        return musicItem.id === +(req.params.id)
    });
    musicItem.author = req.body.author;
    musicItem.title = req.body.title;
    res.send(musicItem);
});

router.delete('/:id', function (req, res) {
    fileDB = fileDB.filter(function (musicItem) {
      return fileDB.id !== +(req.params.id);
    });
    res.send('Item ' + req.params.id + ' deleted!');
});



module.exports = router;
