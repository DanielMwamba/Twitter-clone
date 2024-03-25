import { createContext, useContext, useState, useEffect } from "react";
import initialData from "../data/initial-data.json";
import axios from "axios";

const TweetsContext = createContext(null);

export function useTweets() {
    return useContext(TweetsContext);
}

export function TweetsProvider ({children}) {
    
    const [tweets, setTweets]= useState([]);

    const addTweet = (newTweet) => {
        setTweets([newTweet, ...tweets]);
    };

     const toogleLike = (tweetId) => {
        setTweets(tweets.map((tweet) => {
            if (tweet.id === tweetId) {
                const updatesLikes = tweet.isLiked?
                tweet.likes-1 : tweet.likes + 1;

                return {...tweet, likes: updatesLikes, isLiked: !tweet.isLiked};
            }
            return tweet;
        }));
            
        };
    

    useEffect(() => {
        async function fetchTweets() {
            try {
                const response = await axios.get("https://twitter-clone-api-qwpi.onrender.com/api/tweets");
                // const response = await axios.get("http://localhost:3000/api/tweets");
                setTweets(response.data);
                console.log(response.data) 
            } catch (error) {
                console.error("Erreur lors de la récupération des tweets :", error);
            }
        }

        fetchTweets();
    }, []);

      useEffect(() => {
            localStorage.setItem("tweets", JSON.stringify(tweets));
        }, [tweets]);

   

    
  

    return (
        <TweetsContext.Provider value={{tweets, addTweet, toogleLike}} >
            {children} 
        </TweetsContext.Provider> 
    );
} 

