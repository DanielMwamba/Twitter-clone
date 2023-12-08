import {Avatar, InfoUser, ButtonFollow} from "."

function Follower({user, title, srcImg}) {
    return (
        <div className="account-follow">
            <Avatar source={srcImg} />
            <InfoUser name={user} title={title} />
            <ButtonFollow style={"btn-follow"}/>
        </div>
    )
}

export default Follower;