import React, { useRef, useState } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";

import "./video.css";
import VideoSIdeBar from "../VideoSidebar/VideoSIdeBar";

const Video = ({ likes, shares, messages, url, handle, song, description }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src={url}
      ></video>
      {/* videoFooter */}
      {/* videoSidebar */}
      <VideoFooter handle={handle} song={song} description={description} />
      <VideoSIdeBar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
