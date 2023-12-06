import { Avatar } from '../components';
import { profile } from '../images';
import { TweetEditorForm } from '../components';

function TweetEditor() {
    return (
        <div className="tweet-editor"> 
            < Avatar source={profile} />
            <TweetEditorForm />
        </div>
    )
}

export default TweetEditor;