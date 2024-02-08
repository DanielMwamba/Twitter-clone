import {Avatar, InfoUser} from "../index";
import {profile} from "../../images/index";
import { NavLink } from "react-router-dom";
import { iconprivate } from "../../icons";
import { more} from "../../icons";
import {useUser} from "../../context/userContext";


function Settings() {

    const {currentUser} = useUser();
   
    return (
        <NavLink className="profile-setting" to="/profile">
            <Avatar source={currentUser.userAvatar} />
            <InfoUser name={currentUser.userName} title={"Bradley Ortiz"} userVerified={iconprivate}/> 
            <img src={more}/>
        </NavLink>
    )
    
}

export default Settings;