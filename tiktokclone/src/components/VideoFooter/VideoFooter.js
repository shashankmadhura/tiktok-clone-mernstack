import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = ({ handle, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{handle}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__spinner"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="spinner"
      />
    </div>
  );
};

export default VideoFooter;
