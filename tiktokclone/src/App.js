import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video/Video";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("/v2/posts");
    setVideos(response.data);
    return response;
  };

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, likes, messages, shares, channel, description, song }) => (
            <Video
              url={url}
              likes={likes}
              messages={messages}
              shares={shares}
              handle={channel}
              description={description}
              song={song}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
