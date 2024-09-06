import fastify from "fastify";
import mysql from 'mysql'
import { date } from "yup";
import bcrypt from 'bcrypt'
import Sign_up from './createusers.js'
import Login from "./loginuser.js";
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'
import  request from  'request'
import fastifymultipart from 'fastify-multipart'
import  { createWriteStream } from 'fs';
import fd from 'fs'
import  multerf from 'fastify-multer'
const app = fastify({ logger: true })

app.register(multerf.contentParser)
const saltRounds = 10
const port0 = process.env.PORT || 70;
app.listen({ port: port0, host: "localhost" })
const Link = mysql.createConnection(({
    host: "localhost",
    user: "root",
    password: "",
    database: "maneger_financial"        
}))
Link.connect(err => {
    if (err) {
        console.err("erro na conexão", err)
    } else {     
        console.log("conecatdo com sucesso")
    }
})   
                      

app.get("/", function (req, res) {
    Link.query("SELECT * FROM tbl_todo", (err, results) => {
        if (err) {
            res.status(500).send({ error: "Erro no servidor" })
            return;
        } else {
            console.log(results)
        }
    })
})

  
app.post('/store', async (req, res) => {
    const { name, email, password } = req.body;
    if (name && email && password) {
        try {
            const user = {  
                name: name,
                email: email,
                password: password
            }
            const date = new Date().toISOString();
            const secretKey = "danieldev2024"
            const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
            const result = await Sign_up(password, name, email, saltRounds, Link, bcrypt, token);
            if (result) {
                res.status(200).send({ success: "Usuário cadastrado com sucesso", result });
            } else {
                res.status(400).send({ success: "Usuário não cadastrado  ", result });
            }
        } catch (error) {

            console.error('Erro ao executar Sign_up:', error);
            res.status(500).send({ err: "Erro ao cadastrar usuário" });
        }
    } else {

        res.status(400).send({ err: "Campos vazios" });
    }
});
app.post("/login", (req, res) => {
    const { email, password } = req.body
    async function authenticateUser() {
        try {
            const isAuthenticated = await Login(email, password, Link, bcrypt);
            console.log(isAuthenticated)
            if (isAuthenticated.status) {
                res.status(200).send({ status: true, data: isAuthenticated });
            } else {
                res.status(400).send({ status: false, msg: "Usuario não autenticado!" });
            }
        } catch (error) {
            res.status(400).send({ status: true, error: error });
        }
    }

    authenticateUser();
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);   
    }
});

const upload = multer({ storage: storage });
app.post('/upload', { preHandler:upload.single('myFile')}, (req, res) => {
    console.log(req.pipe);
    res.send('Arquivo enviado com sucesso!');
  });