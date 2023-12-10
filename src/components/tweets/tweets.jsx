import React from "react";
import { Tweet } from "..";
import tweetsData from "../../utils/tweetsData";

function Tweets() {
  return (
    <>
      <div>
        {tweetsData.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </>
  );
}

export default Tweets;
