import {Avatar, InfoUser} from "../index";
import {profile} from "../../images/index";
import { NavLink } from "react-router-dom";


function Settings() {
   
    return (
        <NavLink className="profile-setting" to="/profile">
            <Avatar source={profile} />
            <InfoUser name={"@bradley"} title={"Bradley Ortiz"}/>
        </NavLink>
    )
    
}

export default Settings;