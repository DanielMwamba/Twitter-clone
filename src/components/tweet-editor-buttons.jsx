import { Button } from '../components';
import {TweetEditorActions} from '../components';

function TweetEditorButtons() {
    return (
        <div className="tweet-editor-buttons">
            <TweetEditorActions/>
            <Button style={"button"}/>
        </div>
    )
}

export default TweetEditorButtons ;