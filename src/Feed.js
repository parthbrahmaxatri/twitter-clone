import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post
                displayName="Parth Brahmaxatri"
                username = "parthh"
                verified = {true}
                text = "I challenge you to make a twitter clone!!"
                avatar = "https://avatars.githubusercontent.com/u/69392328?v=4"
                image = "https://media.giphy.com/media/9rwFfmB2qJ0mEsmkfj/giphy.gif"
            />
        </div>
    );
}

export default Feed;