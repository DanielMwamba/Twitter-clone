import React from "react";
// import {useState, useEffect} from  "react";
import { TailSpin } from "react-loader-spinner";
import { Tweet } from "..";
import { useTweets } from "../../context/TweetContext";
import { useUser } from "../../context/userContext";



function Tweets() {

  const { tweets, loading } = useTweets();
  const { users } = useUser();

  const getFiveUsers = users.slice(0, 5)
  console.log(getFiveUsers);

  const usersWithTweets = getFiveUsers.map(user => ({
    ...user,
    tweet: tweets.find(tweet => tweet.author === user.id)
  }))

  console.log("Le voici:", usersWithTweets);

  return (
    <div>
      {loading ?
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#1d9bf0"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        /> :
        usersWithTweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
    </div>
  );
}

export default Tweets;
