import React from "react";

function VideoCard({ url }){

    const urlId = url.includes("v=") ? url.split("v=")[1]?.substring(0, 11) : "";


    return <div className="card">
        <iframe
          className="card-thumb"
          width="100%"
          height="320"
          src={`https://www.youtube.com/embed/${urlId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>;

}

export default VideoCard;