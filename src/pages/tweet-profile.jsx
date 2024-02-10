import { useParams } from "react-router-dom";
import { useTweets } from "../context/TweetContext";
import { Tweet, Avatar } from "../components";


function ProfileTweet() {

   const {userName} = useParams();
   
  let {tweets} = useTweets()

  const userTweets = tweets.find(tweet => tweet.userName === userName);
  const listUserTweet = tweets.filter(user => user.userName === userTweets.userName)
  

   return(
    <>
     <main className="timeline">
      
      <div className="h-32 overflow-hidden">
        <img className="w-full" src={userTweets.imageTweet}/>
      </div>

      <div className="px-5 -mt-12">
        <Avatar source={userTweets.avatar} className="h-32 w-32 bg-white p-2"/> 
      </div>
      <div className="m-5">
        <p className="font-bold text-lg">{userTweets.userName}</p>
        <p className="text-gray-400">{userTweets.infoTweet}</p>
      </div>
      
     
      {listUserTweet.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet}/>
      ))}
    
    </main>
    </>
   
)
}

export default ProfileTweet