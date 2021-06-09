import React, {useState} from "react";
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Anonymous User",
            username: "anon",
            verified: false,
            text: tweetMessage,
        });

        setTweetMessage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;