import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const useRedireccionarUserActivo = (user,path) =>{
    const navigate = useNavigate()

    useEffect(()=>{
        user && navigate(path)
    },[user])

}