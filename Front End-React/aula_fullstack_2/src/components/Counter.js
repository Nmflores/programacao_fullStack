import { useState } from "react";

export default function Counter(){
    let [contador,setContador] = useState(0);

    const incrementa = () => {
        setContador(contador + 1);
    }

    return(
        <>

            <button onClick={incrementa}>+</button>
            {contador} 
            <br/>

        </>
      
    )
};