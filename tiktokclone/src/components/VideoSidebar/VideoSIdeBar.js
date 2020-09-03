import React, { useState } from "react";
import "./VideoSideBar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const VideoSIdeBar = ({ likes, shares, messages }) => {
  const [liked, SetLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      SetLiked(false);
    } else {
      SetLiked(true);
    }
  };

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon onClick={handleLike} />
        ) : (
          <FavoriteBorderIcon onClick={handleLike} />
        )}

        <p>{liked ? parseInt(likes) + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <CommentIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSIdeBar;
