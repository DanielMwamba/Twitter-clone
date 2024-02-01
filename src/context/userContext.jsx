import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider ({children}) {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        axios.get("")
        .then(response => {
            setUserData(response.data);
        })
        .catch(error => {
            console.error("Erreur lors de la récuperation des données de l'utilisateur :", error);
        })
    }, []);

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}