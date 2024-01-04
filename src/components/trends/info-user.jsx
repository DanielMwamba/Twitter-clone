
function InfoUser({ name, title, userVerified}) {
  return (
    <div className="info-user">
      <span>
      {title}
        <img src={userVerified} /> 
        
      </span>
      <span>
      <p>{name}</p>
        </span> 
      
    </div>
  ); 
}

export default InfoUser;
