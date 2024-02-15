import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider ({children}) {
    const [currentUser, setCurrentUser] = useState({

        userVerfied : true,
        userName : "Bradley Ortiz",
        userInfo : "@bradley . 2min",
        userAvatar : "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/800.jpg",
    });
    

    return (
        <UserContext.Provider value={{currentUser}}>
            {children}
        </UserContext.Provider>
    )
}