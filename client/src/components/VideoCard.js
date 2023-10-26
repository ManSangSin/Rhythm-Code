import React from "react";

function VideoCard({ url }) {
	let urlId = "";
	let videoUrl = "";
	//change how video url is split depending on input url to get video id
	if (url.includes("youtu")) {
		urlId = url.includes("v=")
			? url.split("v=")[1]?.substring(0, 11)
			: url.split(".be/")[1]?.substring(0, 11);
		videoUrl = `https://www.youtube.com/embed/${urlId}`;
	}
	if (url.includes("google")) {
		urlId = url.split("file/d/")[1]?.substring(0, 33);
		videoUrl = `https://drive.google.com/file/d/${urlId}/preview`;
	}

	return (
		<div className="card">
			<iframe
				className="card-thumb"
				width="100%"
				height="383"
				src={videoUrl}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
}

export default VideoCard;
