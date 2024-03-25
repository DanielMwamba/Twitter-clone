import React from "react";
// import {useState, useEffect} from  "react";
import { Tweet} from "..";
import { useTweets } from "../../context/TweetContext";
import { useUser } from "../../context/userContext"

function Tweets() {

  const {tweets} = useTweets();
  const {users} = useUser();

const getFiveUsers = users.slice(0, 5)
console.log(getFiveUsers);

const usersWithTweets = getFiveUsers.map(user => ({
  ...user,
  tweet: tweets.find(tweet => tweet.author === user.id)
}))

console.log(usersWithTweets);

  return (
    <div>
      {usersWithTweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet}/>
      ))}
    </div>
  );
}

export default Tweets;
