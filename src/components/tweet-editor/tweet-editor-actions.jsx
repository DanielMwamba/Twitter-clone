import { emoji, gif, media, poll, schedule } from "../../icons";
function TweetEditorActions() {
  return (
    <div className="tweet-editor-actions">
      <img src={emoji} alt="" />
      <img src={gif} alt="" />
      <img src={media} alt="" />
      <img src={poll} alt="" />
      <img src={schedule} alt="" />
    </div>
  );
}

export default TweetEditorActions;
