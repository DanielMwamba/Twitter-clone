// import { useState } from "react";
import { Button } from "..";
import { useForm} from "react-hook-form";
import axios from "axios";
import { useUser } from "../../context/userContext";
import { useTweets } from "../../context/TweetContext";
import { data } from "autoprefixer";

function TweetEditorInput() {

  const {addTweet} = useTweets();
  const {currentUser} = useUser() 

  const {register, handleSubmit, reset, formState:{errors}} = useForm();

  const onSubmit = async(data) => {
    try {
      const tweetData = {
        userVerfied : currentUser.userVerfied,
        userName : currentUser.userName,
        infoTweet : currentUser.userInfo,
        avatar : currentUser.userAvatar,
        tweetContent : data.tweetContent,
        retweets: 0,
        comments : 0,
        likes : 0,
        shares : 0,  
 
        
      };

      const response = await axios.post("https://65ba44e7b4d53c06655271e6.mockapi.io/contact/v1/tweets", tweetData);
      alert("sucées")

      addTweet(response.data); 
      reset();

    } catch (error) { 
      console.error("Erreur lors de l'envoi du tweet :", error);
      alert("echouer")
    }
  }

  return (
    <form className="tweet-editor-buttons" onSubmit={handleSubmit(onSubmit)}>
       <input
      className="tweet-editor-input"
      placeholder="What's happening ?"
      type="text"
      name="tweetContent"
      id="tweet-input"
      {...register( "tweetContent", {
        required : "Le contenu du tweet est requis",
        pattern: {
          value: /\S/,
          message: "Le tweet ne doit pas être vide"
        },
        maxLength : {
          value : 180,
          message: "Le tweet ne peut pas dépasser 180 caractères"
        }})}

    />
    {errors.tweetContent && <p className="msg-error">{errors.tweetContent.message}</p>}

   
    <Button style={"button"} typeBtn={"submit"} />
    </form>
   
  );
}

export default TweetEditorInput;
