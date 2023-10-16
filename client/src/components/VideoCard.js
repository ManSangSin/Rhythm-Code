import React from "react";

function VideoCard({ url }){
    //change how video url is split depending on input url to get video id
    const urlId = url.includes("v=") ? url.split("v=")[1]?.substring(0, 11) : url.split(".be/")[1]?.substring(0, 11);

    return <div className="card">
        <iframe
          className="card-thumb"
          width="100%"
          height="383"
          src={`https://www.youtube.com/embed/${urlId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        </div>;

}

export default VideoCard;