import React, { useState, useRef, useEffect } from "react";
import "./CustomAudioPlayer.css";

function CustomAudioPlayer({ audioUrl }) {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		const audioElement = audioRef.current;

		const onTimeUpdate = () => {
			setCurrentTime(audioElement.currentTime);
		};

		audioElement.addEventListener("timeupdate", onTimeUpdate);

		return () => {
			audioElement.removeEventListener("timeupdate", onTimeUpdate);
		};
	}, [audioRef]);
	const playAudio = () => {
		audioRef.current.play();
		setIsPlaying(true);
	};

	const stopAudio = () => {
		audioRef.current.pause();
		audioRef.current.currentTime = 0;
		setIsPlaying(false);
	};

	const handleSeek = (e) => {
		const newTime = e.target.value;
		setCurrentTime(newTime);
		audioRef.current.currentTime = newTime;
	};

	return (
		<div className="custom-audio-player">
			<button onClick={stopAudio} className="stop-button">
				<div className="stop-rectangles"></div>
				<div className="stop-rectangles"></div>
			</button>
			<button onClick={playAudio} className="play-button">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="44"
					height="52"
					viewBox="0 0 44 52"
				>
					<path d="M10 5V47L40 26L10 5Z" />
				</svg>
			</button>
			<div className="seek-bar-container">
				<div className="seek-bar-start"></div>
				<input
					type="range"
					min={0}
					max={audioRef.current ? audioRef.current.duration : 0}
					value={currentTime}
					onChange={handleSeek}
					className="seek-bar"
				/>
				<div className="seek-bar-end"></div>
			</div>
			<audio ref={audioRef} src={audioUrl}>
				<track
					kind="captions"
					src="captions.vtt"
					srcLang="en"
					label="English"
					default
				/>
			</audio>
		</div>
	);
}

export default CustomAudioPlayer;
