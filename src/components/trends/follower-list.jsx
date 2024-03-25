import { Follower, ShowMore } from "..";
import { imgTwetter, image1, cnn } from "../../images";
import { useTweets} from "../../context/TweetContext";
import { useUser } from "../../context/userContext";

function FollowerList() {

  // const {tweets} = useTweets();
  const  {users} = useUser();
  const acountFollow = users.slice(0, 5);
 
  return (
    <div className="follower-list">
      <h3>Who to follow</h3>

      {acountFollow.map((user) => (
    <Follower key={user.id} user={user}/>
  ))}

      {/* <Follower title={"The New York Times"} user={"@nytimes"} srcImg={image1} profileVerified={vector}/>
      <Follower title={"CCN"} user={"@CCN"} srcImg={cnn} profileVerified={vector}/>
      <Follower title={"Twitter"} user={"@Twitter"} srcImg={imgTwetter} profileVerified={vector}/> */}
      <ShowMore />
    </div>
  );
}

export default FollowerList;
