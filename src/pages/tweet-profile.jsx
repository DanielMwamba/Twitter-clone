import { useParams } from "react-router-dom";
import { useTweets } from "../context/TweetContext";
import { useUser } from "../context/userContext";
import { ProfileUser } from ".";


function ProfileTweet() {

    const {tweets} = useTweets();
    const {users} = useUser();
  
  const getFiveUsers = users.slice(0, 5)
  console.log(getFiveUsers);
  
  const usersWithTweets = getFiveUsers.map(user => ({
    ...user,
    tweet: tweets.filter(tweet => tweet.author === user.id)
 }))
   const {userName} = useParams();
   
//   let {tweets} = useTweets()

  const userTweets = usersWithTweets.find(user => user.name === userName);
//   const listUserTweet = tweets.filter(user => user.userName === userTweets.userName)
  

   return(
    <>
    
    <ProfileUser user={userTweets} />
     
    </>
   
)
}

export default ProfileTweet