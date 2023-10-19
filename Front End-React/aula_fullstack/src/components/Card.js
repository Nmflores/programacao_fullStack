import './Card.css'

function Card({titulo,children} ){  
    const disparaAlarme = () =>{
        alert(`Card ${titulo}`);
    }

    return(
        <div className='card' onClick={disparaAlarme}>

            <div className='card-titulo'>
                <h1>{titulo}</h1>
            </div>

            <div className = 'card-descricao'>
                <h1>{children}</h1>
            </div>
        </div>

    );

}

export default Card;