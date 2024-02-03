import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider ({children}) {
    const [userData, setUserData] = useState(null);
    
    useEffect(() => {
        axios.get("https://65ba44e7b4d53c06655271e6.mockapi.io/contact/v1/user")
        .then(response => {
            setUserData(response.data);
            console.log(response.data)
        })
        .catch(error => {
            console.error("Erreur lors de la récuperation des données de l'utilisateur :", error);
        })
    }, []);

    return (
        <UserContext.Provider value={{userData}}>
            {children}
        </UserContext.Provider>
    )
}