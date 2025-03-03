const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
// const open = require('open');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

const DATA_PATH = path.join(__dirname, 'data', 'dados.json');

app.post('/salvar-cadastro', (req, res) => {
    const dadosFormulario = req.body;
    const { name,email,password } = dadosFormulario;
    // console.log(dadosFormulario);
    // console.log(name);
    // console.log(dadosFormulario["confirm-password"]);

    fs.readFile(DATA_PATH, 'utf-8', (err, data) => {
        if (err && err.code !== 'ENOENT'){
            return res.status(500).json({success:false, message: 'Erro ao ler dados'});
        }

        let dados = {};
        if (data){
            dados = JSON.parse(data);
        }
        if (dados["users"] == undefined){
            dados["users"] = {}
        }
        if (!dados["ecoTasks"]){
            dados["ecoTasks"] = {};
        }
        if (!dados["users"][email]){
            dados["users"][email] = {"nome": name, "senha": password, "allTasks":{}, "ecoTasks":{}};
            dados["login"] = {}
            dados["login"][email] = dados["users"][email];
        }else{
            return res.status(400).json({success: false, message: "E-mail já cadastrado!"});
        }
        if (password != dadosFormulario["confirm-password"]){
            return res.status(399).json({success:false, message:"As senhas digitadas são diferentes!"})
        }



        fs.writeFile(DATA_PATH, JSON.stringify(dados, null, 2), (err) => {
            if (err){
                console.error('Erro ao salvar:', err);
                return res.status(500).send('Erro interno');
            }
            res.json({ success: true, message : "Cadastro realizado com sucesso"})
        })
    })
})


app.post('/salvar-login', (req, res) => {
    const dadosFormulario = req.body;
    const { email,password } = dadosFormulario;
    // console.log(dadosFormulario);
    // console.log(name);
    // console.log(dadosFormulario["confirm-password"]);

    fs.readFile(DATA_PATH, 'utf-8', (err, data) => {
        if (err && err.code !== 'ENOENT'){
            return res.status(500).json({success:false, message: 'Erro ao ler dados'});
        }

        let dados = {};
        if (data){
            dados = JSON.parse(data);
        }
        if (dados["users"] == undefined){
            dados["users"] = {};
        }
        if (!dados["ecoTasks"]){
            dados["ecoTasks"] = {};
        }
        if (dados["users"][email]){
            if(password == dados["users"][email]["senha"]){
                dados["login"] = {};
                dados["login"][email] = dados["users"][email];
            }else{
                return res.status(399).json({success: false, message: "Senha incorreta"});
            }

        }else{
            return res.status(400).json({success: false, message: "O E-mail digitado não está cadastrado"});
        }



        fs.writeFile(DATA_PATH, JSON.stringify(dados, null, 2), (err) => {
            if (err){
                console.error('Erro ao salvar:', err);
                return res.status(500).send('Erro interno');
            }
            res.json({ success: true, message : "Cadastro realizado com sucesso"})
        })
    })
})

app.listen(PORT, () => {
    console.log('Servidor rodando');
    // open(`http://localhost:${PORT}/cadastro.html`);
})