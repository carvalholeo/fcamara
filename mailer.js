var nodemailer = require('nodemailer');

var $usuario = 'pesquisahospitalfcamara@gmail.com';
var $senha = 'hospitalfcamara'; 

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: $usuario,
        pass: $senha
    }
});

var $destinatario = 'pesquisahospitalfcamara@gmail.com';

var mailOptions = {
    from: $usuario,
    to: $destinatario,
    subject: 'Nova resposta à Pesquisa de Satisfação',
    text: 'Olá, a Pesquisa de Satisfação tem uma nova resposta.'
};

function send() {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}

module.exports = { send };