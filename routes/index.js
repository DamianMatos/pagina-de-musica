var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/', async (req, res, next) => {

  console.log(req.body)

  var nombre = req.body.nombre;
  var correo = req.body.correo;
  var apellido = req.body.apellido;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'matosdamian95@gmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + " " + apellido + " se contactó a través de la web y quiere más información a este correo: " + correo + ". Además, hizo este comentario: " + mensaje 
  };

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  var info = await transport.sendMail(obj);

  res.render('index', {
    message: 'Mensaje enviado correctamente'
  });
});


module.exports = router;
