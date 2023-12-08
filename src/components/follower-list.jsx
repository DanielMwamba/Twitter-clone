import { Follower } from ".";
import { imgTwetter, image1, profilePhoto } from "../images";

function FollowerList() {
  return (
    <div className="follower-list">
      <h3>Who to follow</h3>
      <Follower title={"New-York"} user={"@nytimes"} srcImg={image1} />
      <Follower title={"CCN"} user={"@cnn"} srcImg={profilePhoto} />
      <Follower title={"Twitter"} user={"@twitter"} srcImg={imgTwetter} />
    </div>
  );
}

export default FollowerList;
