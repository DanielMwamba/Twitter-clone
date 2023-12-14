import {Avatar, InfoUser} from "../index";
import {profile} from "../../images/index"

function Settings() {
   
        return (
            <div className="profile-setting">
                <Avatar source={profile} />
                <InfoUser name={"@bradley"} title={"Bradley Ortiz"}/>
            </div>
        )
    
}

export default Settings;