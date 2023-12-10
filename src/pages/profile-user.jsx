import {Header, Avatar} from "../components/"
import { profile } from "../images/"

function ProfileUser() {

    return(
        <main className="timeline">
            <Header title={"Profile"}/>
            <Avatar source={profile} />
        </main>
    )
}

export default ProfileUser