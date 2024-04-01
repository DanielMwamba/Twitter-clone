import {Tweet, Avatar} from "../components/";


function ProfileUser({user, listTweet}) {


    return(
        <main className="timeline">
        <div className="h-32 overflow-hidden">
        <img className="w-full" src={user.profileBackground}/>
      </div>

      <div className="px-5 -mt-12">
        <Avatar source={user.profilePicture} className="h-32 w-32 bg-white p-2"/> 
      </div>
      <div className="m-5">
        <p className="font-bold text-lg">{user.name}</p>
        <p className="text-gray-400">{user.bio}</p>
      </div>
      
     
      {user.tweet.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet}/>
      ))}
        </main>
    )
}

export default ProfileUser