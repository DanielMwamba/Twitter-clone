function IconAction({ icon, details, tooltiptext }) {
  return (
    <button className="icon-button tooltip">
      {icon} <p className="tweet-actions">{details}</p>
      <div className="tooltiptext">{tooltiptext}</div>
    </button>
  );
}

export default IconAction;
