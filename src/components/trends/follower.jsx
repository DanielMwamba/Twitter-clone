import { Avatar, InfoUser, ButtonFollow } from "..";
import { vector } from "../../icons";


function Follower({ user, title, srcImg, profileVerified,tweet }) {
  return (
    <div className="account-follow">
      <Avatar source={tweet.avatar} />
      <InfoUser name={tweet.userName} title={title} userVerified={vector}/>
      <ButtonFollow style={"btn-follow"} />
    </div>
  );
}

export default Follower;
