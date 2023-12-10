import { Follower, ShowMore } from "..";
import { imgTwetter, image1, cnn } from "../../images";
import { vector } from "../../icons";

function FollowerList() {
  return (
    <div className="follower-list">
      <h3>Who to follow</h3>
      <Follower title={"The New York Times"} user={"@nytimes"} srcImg={image1} profileVerified={vector}/>
      <Follower title={"CCN"} user={"@CCN"} srcImg={cnn} profileVerified={vector}/>
      <Follower title={"Twitter"} user={"@Twitter"} srcImg={imgTwetter} profileVerified={vector}/>
      <ShowMore />
    </div>
  );
}

export default FollowerList;
