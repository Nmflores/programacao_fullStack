import Card from "./Card"

export default function ListCards({lista}){
    return(
        lista.map((produto) =>
        <Card titulo = {produto.nome}>
            <h3>{produto.preco.toLocaleString(
                'pt-BR',{style: "currency", currency:"BRL"})}
            </h3>
        </Card>
        
        
        )
    )

}