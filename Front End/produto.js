window.onload = () => {
    buscarProdutos()
}

function buscarProdutos(){

    //alert("Buscando produtos...");
    let http = new XMLHttpRequest();
    http.onload = function()  {
        let listaProdutos = JSON.parse(this.responseText)
        carregaProduto(listaProdutos);
    }
    http.open("GET", "http://localhost:3000/produtos")
    http.send();
    //Necessario para post
    //http.setRequestHeader("content-type","apliccation/json")
}

function carregaProduto(listaProdutos){
    let htmlProdutos = '';
    for(let produto of listaProdutos){
        const cardProduto = 
            `<div class="w3-col l4 m6 s12 w3-container w3-padding-16">
                <div class="w3-card">
                    <div class="w3-container w3-center">
                        <img src = ${produto.imagem} style="width: 70%">
                        <h5>${produto.nome}</h5>
                        <h3 class="w3-blue">${produto.preco.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</h3>
                    </div>
                </div>
            </div>`
            htmlProdutos += cardProduto;
    }
    

    

   document.querySelector("#produtos").innerHTML = htmlProdutos;
}