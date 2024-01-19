import { createContext, useContext, useState, useEffect } from "react";
import initialData from "../data/initial-data.json";

const TweetsContext = createContext(null);

export function useTweets() {
    return useContext(TweetsContext);
}

export function TweetsProvider ({children}) {
    
    const [tweets, setTweets]= useState([]);

    useEffect(() => {
        setTweets(initialData.tweets)
    })

    function addTweet(newTweet) {
        setTweets([newTweet, tweets]);
    }

    return (
        <TweetsContext.Provider value={{tweets, addTweet}} >
            {children}
        </TweetsContext.Provider> 
    );
} 

