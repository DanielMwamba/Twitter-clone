import { Button } from '../components';
import {message, explore, lists, twitter, notification, bookmarks, profile, more, home} from '../icons'



function SidebarLeft() {
    return (
        <div>
            <div className='sidebar-nav'>
                <img src={twitter} alt="" />
            </div>

            <div className='sidebar-nav'>
                <img src={home} alt="" />
                <h4>Home</h4>
            </div>

            <div className='sidebar-nav'>
                <img src={explore} alt="" />
                <h4>Explore</h4>
            </div>

            <div className='sidebar-nav'>
                <img src={notification} alt="" />
                <h4>Notifications</h4>
            </div>

            <div className='sidebar-nav'>
                <img src={message} alt="" />
                <h4>Messages</h4>
            </div>

            <div className='sidebar-nav'>
                <img src={bookmarks} alt="" />
                <h4>Bookmarks</h4>
            </div>

            <div className='sidebar-nav'>
                <img src={lists} alt="" />
                <h4>Lists</h4>
            </div>

            <div className='sidebar-nav'>
                <img src={profile} alt="" />
                <h4>Profile</h4>
            </div>

            <div className='sidebar-nav'>
                <img src={more} alt="" />
                <h4>More</h4>
            </div>

            <Button style={"sidebar-left-button"}/>
        </div>
    )
}

export default SidebarLeft