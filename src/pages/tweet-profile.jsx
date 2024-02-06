import { useParams } from "react-router-dom";
import { useTweets } from "../context/TweetContext";
import { Tweet } from "../components";


function ProfileTweet() {

   const {userName} = useParams();
   
  let {tweets} = useTweets()

  const userTweets = tweets.filter(tweet => tweet.userName === userName)
  

   return(
    <>
     <main className="timeline">
         
      {userTweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet}/>
      ))}
    
    </main>
    </>
   
)
}

export default ProfileTweet