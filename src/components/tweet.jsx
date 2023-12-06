import React from 'react'
import {Avatar} from '../components'



function Tweet({ tweet }) {
    return (

        <>
            
            
            <div className="tweet">
                <div className='tweet-avatar'>
                  <Avatar source={tweet.avatar} />
                  
                </div> 

                
                
                <div className='tweet-content'>

                    <div className='tweet-body'>
                        <div className='tweet-title'>
                            <p className='tweet-title-author'> {tweet.title} </p>
                             
                            <span> <img src={tweet.imgverified} alt="" /> </span>
                            <p  className='tweet-title-details'>  {tweet.titleDescription} </p>
                        </div>

                        <p className='tweet-text'> {tweet.content} </p>
                        <div className='tweet-image'> <img src={tweet.Image} alt="" /></div>                   
                    </div>

                   

                    <div className='tweet-actions'>
                            <span className='tweet-action'>  
                                <img src={tweet.iconAction.iconReply} /> 
                                {tweet.details.actionCountComments} 
                            </span>

                            <span className='tweet-action'>  
                                <img src={tweet.iconAction.iconRetweet} /> 
                                {tweet.details.actionCountRetweets} 
                            </span>

                            <span className='tweet-action'>  
                                <img src={tweet.iconAction.iconReact} /> 
                                {tweet.details.actionCountLikes} 
                            </span>
                            <span className='tweet-action'>  
                                <img src={tweet.iconAction.iconShare} /> 
                                {tweet.details.actionCountShares} 
                            </span>
                    </div>
                </div>
            </div>
        </>

    )

}



export default Tweet;