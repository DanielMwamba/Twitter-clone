// import { useState } from 'react';


// const IconAction = ({ icon, details }) => {
//   const [isHovered, setIsHovered] = useState(false);

function IconAction({icon, details}) {
    return(
        <>
        <button className="icon-button"> 
            {icon} <p className='tweet-actions'>{details}</p>
        </button>
      
      </>
    )
}



export default IconAction;