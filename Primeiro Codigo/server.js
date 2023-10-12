const express = require('express');

const app = express();
const port = 3000;

let listaProdutos = [
    {id:1,nome:"Arroz",preço:3.7}
];

app.use(express.json())

app.get('/api/produtos', (req,res) => {
    res.json(listaProdutos);
})

app.listen(port,() => {
    console.log("Servidor iniciado ..");
})

