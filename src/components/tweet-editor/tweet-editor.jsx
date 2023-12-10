import { Avatar } from "..";
import { profile } from "../../images";
import { TweetEditorForm } from "..";

function TweetEditor() {
  return (
    <div className="tweet-editor">
      <Avatar source={profile} />
      <TweetEditorForm />
    </div>
  );
}

export default TweetEditor;
