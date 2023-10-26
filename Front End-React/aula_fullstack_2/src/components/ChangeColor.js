import { useState } from "react";

export default function ChangeColor(){

    const [color,setColor] = useState('red');

    return(
        <>
            <button type ='button' style = {{backgroundColor:color,color:'white'} }
            onClick={() => {
                    if(color == 'red'){
                        setColor('blue');
                    }
                    else{
                        setColor('red');
                    }
                }
            }>
                {color}
            </button>
         

       </>
             
    )
}