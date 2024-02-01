import { useParams } from "react-router-dom";
import {Header, Avatar, Tweets} from "../components"

function ProfileTweet({tweet}) {
   const useParam = useParams();
   const {userName} = useParam;

   const arr = Object.entries(tweet)
   console.log(arr);
   
   const user = arr.find(([key, value]) => key === userName)

   return(
    <main className="timeline">
        <Header title={"Profile"}/>
        <Avatar source={user.avatar} />
    </main>
)
}

export default ProfileTweet