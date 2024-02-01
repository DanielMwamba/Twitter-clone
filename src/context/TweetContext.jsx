import { createContext, useContext, useState, useEffect } from "react";
import initialData from "../data/initial-data.json";
import axios from "axios";

const TweetsContext = createContext(null);

export function useTweets() {
    return useContext(TweetsContext);
}

export function TweetsProvider ({children}) {
    
    const [tweets, setTweets]= useState([]);

    useEffect(() => {
        axios.get("https://65ba44e7b4d53c06655271e6.mockapi.io/contact/v1/tweets")
        .then(response => {
           setTweets(response.data)
        })
        .catch(error => {
           console.error("Erreur lors de la récupération des tweets :" ,error)
        });

}, [])

    function addTweet(newTweet) {
        setTweets([newTweet, ...tweets]);
    }
  

    return (
        <TweetsContext.Provider value={{tweets, addTweet}} >
            {children}
        </TweetsContext.Provider> 
    );
} 

