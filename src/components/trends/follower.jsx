import { Avatar, InfoUser, ButtonFollow } from "..";
import { vector } from "../../icons";


function Follower({title, srcImg, profileVerified,user }) {
  return (
    <div className="account-follow">
      <Avatar source={user.profilePicture} />
      <InfoUser name={user.name} title={title} userVerified={vector}/>
      <ButtonFollow style={"btn-follow"} />
    </div>
  );
}

export default Follower;
