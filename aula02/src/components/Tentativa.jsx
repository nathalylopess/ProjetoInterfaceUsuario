import EscopoAtividade from './EscopoAtividade';
import Info1v from './Info1V';
import { useState } from 'react';}

export default function Tentativa(){
    let [isLogged, setIsLogged] = useState(False)

    if(isLogged){
        content = <EscopoAtividade/>
    }

    return (
        <>
          <button inClick={() => }></button>  {isLogged ? EscopoAtividade : Info1v}        
        </>
    )

}

