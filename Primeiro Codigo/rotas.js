const express = require('express');

const app = express();
const port = 3000;


app.get('/about', (req,res) => {
    res.send('<h1>About...</h1>');
})

app.get('/api/produtos', (req,res) => {
    res.json(listaProdutos);
})

app.get('/api/produtos:id', (req,res) => {
    const id = req.params.id;
    const produtoEncontrado = listaProdutos.find((produto) =>{
        return (produto.id == id);
    })
    res.json(produtoEncontrado);
})

app.post('/api/produtos', (req,res) =>{
    const produto = req.body;
    if(produto.nome == 'teste'){
        res.send('Preço:' + produto.preco);
    }
    listaProdutos.push(produto);
})

app.put('/api/produtos/:id', (req,res) =>{
    const id = req.params.id;
    const produtoAlterado = req.body;
    const indiceProdutoEncontrado = listaProdutos.findIndex((produto) =>{
        return (produto.id == id);
    })
    if(indiceProdutoEncontrado >= 0){
        listaProdutos[indiceProdutoEncontrado] = produtoAlterado;
        listaProdutos[indiceProdutoEncontrado].id = id;
    }
    res.json(listaProdutos[indiceProdutoEncontrado]);
})

app.delete('/api/produtos/:id', (req,res) =>{
    const id = req.params.id;
    const indiceProdutoEncontrado = listaProdutos.findIndex((produto) =>{
        return (produto.id == id);
    })
    const produtoDeletado = listaProdutos.splice(indiceProdutoEncontrado,1);
    res.json(produtoDeletado);
})



