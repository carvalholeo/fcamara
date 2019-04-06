var express = require('express');
var notification = require('../mailer');
var db = require('../db');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/responder', function(req, res, next) {
  const pergunta1 = req.body.pergunta1;
  const pergunta2 = req.body.pergunta2;
  const pergunta3 = req.body.pergunta3;
  const pergunta4 = req.body.pergunta4;
  const pergunta5 = req.body.pergunta5;
  const pergunta6 = req.body.pergunta6;
  const pergunta7 = req.body.pergunta7;
  const pergunta8 = req.body.pergunta8;
  const pergunta9 = req.body.pergunta9;
  const pergunta10 = req.body.pergunta10;


  let resposta = {
    pergunta1,
    pergunta2,
    pergunta3,
    pergunta4,
    pergunta5,
    pergunta6,
    pergunta7,
    pergunta8,
    pergunta9,
    pergunta10
  }

  db.insert(resposta, (err, result) => {
    if(err) {
      return err;
    }

    notification.send();

    return res.statusCode;
  });
});

router.get('/responder', function(req, res, next) {
  res.render('pesquisa');
});

router.get('/respostas', function(req, res) {
  db.findAll((e, docs) => {
    if(e) {
      return console.log(e);
    }
    return res.json(docs);
  });
})

module.exports = router;
