import { useParams } from "react-router-dom";
import { useTweets } from "../context/TweetContext";
import { ProfileUser } from ".";


function ProfileTweet() {

   const {userName} = useParams();
   
  let {tweets} = useTweets()

  const userTweets = tweets.find(tweet => tweet.userName === userName);
  const listUserTweet = tweets.filter(user => user.userName === userTweets.userName)
  

   return(
    <>
    
    <ProfileUser user={userTweets} listTweet={listUserTweet}/>
     
    </>
   
)
}

export default ProfileTweet