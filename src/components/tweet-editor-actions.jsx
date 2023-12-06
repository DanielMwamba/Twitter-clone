import {emoji, gif, media, poll, schedule} from '../icons'
function TweetEditorActions() {
    return (
            <div className="tweet-editor-actions">
                <img src= {emoji} alt="actions"  />
                <img src={gif}  alt="actions"  />
                <img src={media}  alt="actions"  />
                <img src={poll}  alt="actions"  />
                <img src={schedule}  alt="actions"  />
            </div>
    )
}

export default TweetEditorActions ;