import { useEffect } from "react"
import { useLocation } from "react-router-dom"


//uso el hook useLocation para posicionar en scroll(0,0) cada vez que renderiza una pagina nueva
export const ScrollTop = () =>{
    const pathRuta  = useLocation()


    useEffect ( ()=>
    {
        window.scroll (0,0)
    },[pathRuta]);

    return null;
    
}
