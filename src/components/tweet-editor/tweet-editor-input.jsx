import { useState } from "react";
import { Button } from "..";
import { useForm} from "react-hook-form";
import axios from "axios";
import { useUser } from "../../context/userContext";
import { useTweets } from "../../context/TweetContext";
import { data } from "autoprefixer";

function TweetEditorInput() {

  const {addTweet} = useTweets();

  const {register, handleSubmit, reset, formState:{errors}} = useForm();

  const currentUser = useUser();

  const onSubmit = async(data) => {
    try {
      const tweetData = {
        content : data.content,
        author : currentUser,
        creatdAt : new Date()
      };

      const response = await axios.post("", tweetData);

      addTweet(response.data); 
      reset();

    } catch (error) {
      console.error("Erreur lors de l'envoi du tweet :", error);
    }
  }

  return (
    <form className="tweet-editor-buttons" onSubmit={handleSubmit(onSubmit)}>
       <input
      className="tweet-editor-input"
      placeholder="What's happening ?"
      type="text"
      name="content"
      id="tweet-input"
      {...register( "content", {
        required : "Le contenu du tweet est requis",
        maxLength : {
          value : 180,
          message: "Le tweet ne peut pas dépasser 180 caractères"
        }})}

    />
    {errors.content && <span>{errors.content.message}</span>}

    {errors.content === "maxLength" && <span></span>}
    <Button style={"button"} typeBtn={"submit"} />
    </form>
   
  );
}

export default TweetEditorInput;
