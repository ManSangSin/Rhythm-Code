import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalVideo from "../components/ModalVideo";

const rhythms = [
	{
		title: "DC Hand dancing",
		url: "https://www.youtube.com/watch?v=M6uM0qrjetQ",
		location: "Washington DC",
		description: "I have both Video and Description",
	},
	{
		title: "Rumba Guaguanco",
		location: "Havana, Cuba",
		description: "I have no video to play, for more information google me!",
	},
	{
		title: "DC Hand dancing 2",
		url: "https://www.youtube.com/watch?v=M6uM0qrjetQ",
		location: "Washington DC",
	},
	{
		title: "Adaha and Konkoma",
		audioUrl:
			"https://soundcloud.com/shugo_srd/shugz-king-of-my-castle?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		location: "Washington DC",
	},
	{
		title: "Dance Band Highlife",
		audioUrl:
			"https://soundcloud.com/eduleon42/are-we-going-out-tonight-vol-3?si=0cd23cdd892b41c6ad451505b21c0d3f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
		location: "Washington DC",
		description:
			"Dance band likely had its immediate roots in the orchestras founded and popularized by West African coastal elites who lived in the region’s expanding colonial and cosmopolitan cities",
	},
];

function ModalTestingPage() {
	const [show, setShow] = useState(false);
	const [selectedRhythm, setSelectedRhythm] = useState(null);

	const handleClose = () => {
		setShow(false);
		setSelectedRhythm(null);
	};

	const handleShow = (rhythm) => {
		setSelectedRhythm(rhythm);
		setShow(true);
	};

	return (
		<div>
			<h2>Testing Modal</h2>
			<div
				// just add some temporary style
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					width: "12rem",
				}}
			>
				{rhythms.map((rhythm, index) => (
					<Button
						key={index}
						variant="primary"
						onClick={() => handleShow(rhythm)}
					>
						Explore {rhythm.title}
					</Button>
				))}
			</div>
			{selectedRhythm && (
				<ModalVideo
					show={show}
					handleClose={handleClose}
					title={selectedRhythm.title}
					url={selectedRhythm.url}
					audioUrl={selectedRhythm.audioUrl}
					description={selectedRhythm.description}
					location={selectedRhythm.location}
				/>
			)}
		</div>
	);
}

export default ModalTestingPage;

