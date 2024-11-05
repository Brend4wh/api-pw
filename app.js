const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // carrega as variaveis de ambiente, ou seja, armazena as informações no banco de dados, por isso nao ENVIAR AO GITHUB

const app = express(); // srve para ultilizar o "express()"

app.use(cors()); // Middleware CORS, middlaware -> da uma proteção a mais na sua api, CORS -> pode bloquear a pessoa que for tenta acessar a api

//Middleware para JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rota inicial 
app.get("/", (req, res) => {
    res.send("api de crud de usuario");
});

//importa e usa as rotas de usuário, ou seja, vamos criar o usuario
const userRoutes = require("./routes/usuario");
app.use("/api", userRoutes);

//porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});