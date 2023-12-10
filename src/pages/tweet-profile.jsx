import { useParams } from "react-router-dom";
import {Header, Avatar} from "../components"

function ProfileTweet({tweet}) {
   const useParam = useParams();
   const {title} = useParam;
   
   const user = tweet.find((user) => user.title === title)

   return(
    <main className="timeline">
        <Header title={"Profile"}/>
        <Avatar source={user.avatar} />
    </main>
)
}

export default ProfileTweet