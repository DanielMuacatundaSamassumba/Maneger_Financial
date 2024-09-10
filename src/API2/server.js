import express from 'express'
import mysql from 'mysql'
import Showuser from './ShowUser.js'
import bcrypt from 'bcrypt'
import Sign_up from './createusers.js'
import Login from "./loginuser.js";
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'path'
import uploads from './Uplouds.js';
import ShowSpent from './showSpent.js';
import Delete from './Delete.js';
import Spent from './Spent.js';
import UpdateSpent from './UpdateSpent.js'
import UpdateUser from './Updateuser.js'
import ShowPayments from './ShowPaymts.js'
const app = express()
const saltRounds = 10
const port0 = process.env.PORT || 70;

app.listen({ port: port0, host: "localhost" })
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
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


app.get("/show/payments/:id", async function (req, res) {
    try {
      const id = req.params.id;
  
      // Ensure id is valid before making any database call
      if (!id) {
        return res.status(400).send({ status: false, message: "ID is required" });
      }
  
      // Call the ShowPayments function and await its result
      await ShowPayments(Link, id, res);
  
    } catch (error) {
      // Handle any potential errors in the route
      console.error("Error in /show/payments/:id:", error);
      res.status(500).send({ status: false, message: "Internal Server Error", error });
    }
  });
  


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
        cb(null, 'uploads'); // Define a pasta para upload
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // Usa o path.extname para pegar a extensão do arquivo
        const fileExtension = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension); // Adiciona a extensão ao nome
    }
});

const upload = multer({ storage: storage })
app.post('/profile/:id', upload.single('avatar'), async function (req, res) {
    try {

        const fileName = "/uploads/" + req.file.filename;
        const userId = req.params.id;


        await Link.query(
            "INSERT INTO tbbl_imagepath (image_path, id_user) VALUES (?, ?)",
            [fileName, userId]
        );

        res.status(200).json({ message: 'Imagem salva com sucesso!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/spent/:id", async (req, res) => {
    const { desc, typeSpent, amount } = req.body
    const idUser = req.params.id
    Spent(Link, idUser, desc, typeSpent, amount, res)
})

app.delete("/delete/spent/:id", async (req, res) => {
    const idUser = req.params.id
    Delete(Link, idUser, res)
})

app.get("/show/spent/:id", async (req, res) => {
    const id = req.params.id
    await ShowSpent(Link, id, res)
})

app.put("/show/spent/update/:id", async (req, res) => {
    const { desc, typeSpent, amount } = req.body
    const idUser = req.params.id
    await UpdateSpent(Link, idUser, desc, typeSpent, amount, res)
})

app.put("/update/user/:id", async (req, res) => {
    const id = req.params.id
    const { name, email, password } = req.body
    await UpdateUser(Link, name, email, password, res, id, bcrypt, saltRounds)
})