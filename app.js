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

app.get('/api/produtos', function(req, res){
    // if(req.header('token') != 'MEUTOKEN123456789'){
    //     setTimeout(function(){
    //         res.send(401, {
    //             'erro': {
    //                 'http_code': 401,
    //                 'code': 'unauthorized',
    //                 'mensagem': 'Login e/ou senha inválidos'
    //             }
    //         })
    //     }, 4000);
    // } else {
        setTimeout(function(){
            res.header('Acess-Control-Allow-Origin', '*')
                .send(200, {
                    data : {
                        produtos: [
                            {
                                id: 1,
                                nome: 'Chocolate',
                                categoria: 'Doce',
                                descricao: 'Chocolate muito gostoso'
                            },
                            {
                                id: 2,
                                nome: 'Coxinha',
                                categoria: 'Salgado',
                                descricao: 'A melhor coxinha do mundo'
                            },
                            {
                                id: 3,
                                nome: 'Açai',
                                categoria: 'Doce',
                                descricao: 'O melhor açai que voce ja viu'
                            },
                            {
                                id: 4,
                                nome: 'Pizza',
                                categoria: 'Salgado',
                                descricao: 'Pizza de calabresa'
                            },
                            {
                                id: 5,
                                nome: 'Bala',
                                categoria: 'Doce',
                                descricao: 'Bala macia para crianças'
                            },
                            {
                                id: 6,
                                nome: 'Cola-Cola',
                                categoria: 'Doce',
                                descricao: 'Cola-cola muito gelada'
                            }
                        ]
                    }
                })
        }, 4000)
    }
);

app.listen(3000);
console.log('API disponivel!');