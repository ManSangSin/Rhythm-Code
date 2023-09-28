import React from "react";

function VideoCard(){
    const data = [
        {
            title: "Rumba Guaguanco",
            url: "https://www.youtube.com/watch?v=gJVT_5swkhA",
            location: "Havana, Cuba",
        },
    ];

    const urlId = data[0]?.url?.includes("v=") ? data[0].url.split("v=")[1]?.substring(0, 11) : "";


    return <div className="card">
        <iframe
          className="card-thumb"
          width="320"
          height="320"
          src={`https://www.youtube.com/${urlId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>;

}

export default VideoCard;