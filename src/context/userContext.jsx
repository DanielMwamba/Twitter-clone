import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider ({children}) {

    const [users, setusers] = useState([]);
    const [currentUser, setCurrentUser] = useState({

        userVerfied : true,
        userName : "Bradley Ortiz",
        userInfo : "@bradley . 2min",
        userAvatar : "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/800.jpg",
    });
            // const [currentUser, setCurrentUser] = useState();

            useEffect(() => {
                async function fetchUser() {
                    try {
                        // const response = await axios.get("http://localhost:3000/api/user");
                        const response = await axios.get("https://twitter-clone-api-qwpi.onrender.com/api/user");
                        setusers(response.data);
                        console.log(response.data) 
                    } catch (error) {
                        console.error("Erreur lors de la récupération de l'utilisateur :", error);
                    }
                }
        
                fetchUser();
            }, []);

    

    return (
        <UserContext.Provider value={{currentUser, users}}>
            {children}
        </UserContext.Provider>
    )
}