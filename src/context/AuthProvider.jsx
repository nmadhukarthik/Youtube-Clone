import { useEffect, useState, createContext, useContext } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [value,setValue] = useState("india")

    useEffect(()=>{
        fetchAllData(value)
    },[value])

    const fetchAllData = (query) => {
        setLoading(true)
        fetchData(`search/?q=${query}`)
        .then(({contents})=>{
            setData(contents)
            setLoading(false)
        })
    }
    return(
        <AuthContext.Provider value={{loading,value,data,setValue}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext)