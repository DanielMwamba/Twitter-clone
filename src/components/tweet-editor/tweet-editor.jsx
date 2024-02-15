import { Avatar } from "..";
import { useUser } from "../../context/userContext";
import { TweetEditorForm } from "..";

function TweetEditor() {

  const {currentUser} = useUser();
  return (
    <div className="tweet-editor">
      <Avatar source={currentUser.userAvatar} />
      <TweetEditorForm />
    </div>
  );
}

export default TweetEditor;
