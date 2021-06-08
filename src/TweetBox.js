import React from "react";
import "./TweetBox.css";
import {Button} from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <AccountCircleIcon></AccountCircleIcon>
                    <input placeholder="What's happening?" type="text"></input>
                </div>
                <Button className="tweetBox__tweetButton" >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;