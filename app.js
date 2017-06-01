const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));
app.use(cors());

app.post('/api/login', function(req, res){
    var email = req.body.email;
    var senha = req.body.senha;

    if(email != 'rafaelvicio@icloud.com' || senha != '12345'){
        setTimeout(function(){
            res.send(401, {
                'erro': {
                    'http_code': 401,
                    'code': 'unauthorized',
                    'mensagem': 'Login e/ou senha inválidos'
                }
            })
        }, 4000);
    } else {
        setTimeout(function(){
            res
                .header('Acess-Control-Allow-Origin', '*')
                .send(200, {
                    'data': {
                        'nome': 'Rafael Augusto',
                        'email': 'rafaelvicio@icloud.com',
                        'token': 'MEUTOKEN123456789'
                    }
                });
        }, 4000);
    }
});

app.listen(3000);
console.log('API disponivel!');