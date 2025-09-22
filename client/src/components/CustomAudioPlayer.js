import React, { useState, useRef, useEffect } from "react";
import { getAudioUrl } from "../assets/audio/index.js";
import "./CustomAudioPlayer.css";

function CustomAudioPlayer({ audioUrl }) {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);

	// get actual webpack url for audio file
	const resolvedAudioUrl = getAudioUrl(audioUrl);

	useEffect(() => {
		const audioElement = audioRef.current;
		if (!audioElement) {
			return;
		}

		const onTimeUpdate = () => {
			setCurrentTime(audioElement.currentTime);
		};

		const onError = (e) => {
			console.error("Audio error:", e);
		};

		const onCanPlay = () => {
			console.log("Audio can play:", audioElement.src);
		};

		audioElement.addEventListener("timeupdate", onTimeUpdate);
		audioElement.addEventListener("error", onError);
		audioElement.addEventListener("canplay", onCanPlay);

		return () => {
			audioElement.removeEventListener("timeupdate", onTimeUpdate);
			audioElement.removeEventListener("error", onError);
			audioElement.removeEventListener("canplay", onCanPlay);
		};
	}, [audioRef, resolvedAudioUrl]);

	const playAudio = async () => {
		try {
			await audioRef.current.play();
			setIsPlaying(true);
		} catch (error) {
			console.error("Error playing audio:", error);
		}
	};

	const stopAudio = () => {
		audioRef.current.pause();
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
			{/* Uses resolved URL in audio element */}
			<audio ref={audioRef} src={resolvedAudioUrl}>
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
