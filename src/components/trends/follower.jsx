import { Avatar, InfoUser, ButtonFollow } from "..";


function Follower({ user, title, srcImg, profileVerified }) {
  return (
    <div className="account-follow">
      <Avatar source={srcImg} />
      <InfoUser name={user} title={title} userVerified={profileVerified}/>
      <ButtonFollow style={"btn-follow"} />
    </div>
  );
}

export default Follower;
