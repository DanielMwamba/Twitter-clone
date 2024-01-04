import {Avatar, InfoUser} from "../index";
import {profile} from "../../images/index";
import { NavLink } from "react-router-dom";
import { iconprivate } from "../../icons";
import { more} from "../../icons";


function Settings() {
   
    return (
        <NavLink className="profile-setting" to="/profile">
            <Avatar source={profile} />
            <InfoUser name={"@bradley"} title={"Bradley Ortiz"} userVerified={iconprivate}/> 
            <img src={more}/>
        </NavLink>
    )
    
}

export default Settings;