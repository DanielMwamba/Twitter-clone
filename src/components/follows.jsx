import {Follow} from "../components" 
import {imgTwetter, image1, profilePhoto} from '../images'

function Follows() {
   return (
    <div className="follows"> 
        <h3>Who to follow</h3>
        <Follow title={"New-York"} user={"@nytimes"} srcImg={profilePhoto} />
        <Follow title={"CCN"} user={"@cnn"} srcImg={image1} />
        <Follow title={"Twitter"} user={"@twitter"} srcImg={imgTwetter} />
    </div>
   ) 
}

export default Follows