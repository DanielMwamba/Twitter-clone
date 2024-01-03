import { createContext, useContext } from "react";
import tweetsData from "../../utils/tweetsData";

const TweetsContext = createContext(null);

export function TweetsProvider ({children}) {
    
    const tweets = tweetsData; 
    return (
        <TweetsContext.Provider value={tweets} >
            {children}
        </TweetsContext.Provider> 
    );
} 

export function useTweets() {
    return useContext(TweetsContext); 
}