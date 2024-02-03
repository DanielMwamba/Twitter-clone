function IconAction({ icon, details, tooltiptext, toogle, isLiked }) {

  return (
    <button onClick={toogle} className= {isLiked ? "icon-button tooltip  cliked" : "icon-button tooltip"}>
      {icon} <p className="tweet-actions">{details}</p>
      <div className="tooltiptext">{tooltiptext}</div>
    </button>
  );
}

export default IconAction;
