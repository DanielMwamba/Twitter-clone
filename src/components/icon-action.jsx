import { useState } from 'react';


const IconAction = ({ icon, details }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button
      className="icon-button"
    // className='tweet-editor-actions'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > 
      <img
        src={icon}
        alt="Icon"
        className={isHovered ? 'icon-hovered' : 'icon-normal'}
      /> <p className='tweet-actions'>{details}</p>
    </button>
    
    </>
    
   
  );
};

export default IconAction;