function InfoUser({ name, title, userVerified}) {
  return (
    <div className="info-user">
      <span>
        {title}
        <img src={userVerified} /> 
      </span> 
      <p>{name}</p>
    </div>
  );
}

export default InfoUser;
