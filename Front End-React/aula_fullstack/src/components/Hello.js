const Hello = ({nome}) => {
    return(
        (nome)
            ?<h1> Hello {nome}</h1>
            :<h1>Hello World!</h1>   

    );

}

export default Hello;