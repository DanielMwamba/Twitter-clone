import { useState } from "react";
import { Button } from "..";


function TweetEditorInput({onAddTweet}) {

  const [newTweetContent, setNewTweetContent] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTweetContent.trim() !== "") {
      const newTweet = {
        id: currentUser.id,
        userAvatar: currentUser.userAvatar,
        userName: currentUser.userName,
        tweetContent: newTweetContent,
      };
      onAddTweet(newTweet);
      setNewTweetContent("");
    }
  } 

  return (
    <form className="tweet-editor-buttons" onSubmit={handleFormSubmit}>
       <input
      className="tweet-editor-input"
      placeholder="What's happening ?"
      type="text"
      name="tweet-input"
      id="tweet-input"
      value={newTweetContent}
      onChange={(e) => 
      setNewTweetContent(e.target.value)}

    />
    <Button style={"button"} typeBtn={"submit"} />
    </form>
   
  );
}

export default TweetEditorInput;
