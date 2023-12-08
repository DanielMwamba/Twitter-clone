import {Avatar, InfoUser, ButtonFollow} from "../components"

function Follow({user, title, srcImg}) {
    return (
        <div className="account-follow">
            <Avatar source={srcImg} />
            <InfoUser name={user} title={title} />
            <ButtonFollow style={"button"}/>
        </div>
    )
}

export default Follow;