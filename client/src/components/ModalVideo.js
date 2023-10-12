import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ReactPlayer from "react-player";

import VideoCard from "./VideoCard";


// function ModalVideo({ rhythm, setModalOpen }) {
// 	return (
// 		<div>
// 			{rhythm.description} HELOOOOOOOOO
// 			<button onClick={() => setModalOpen(false)}>CLOSE</button>
// 		</div>
// 	);
// }
////////////////////////////

function ModalVideo({ rhythm, setModalOpen }) {
	const [activeTab, setActiveTab] = useState("video");

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	let modalContent;

	if (rhythm.url && rhythm.description) {
		modalContent = (
			<Tab.Container activeKey={activeTab}>
				<Nav variant="tabs">
					<Nav.Item>
						<Nav.Link eventKey="video" onClick={() => handleTabChange("video")}>
							Video
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							eventKey="description"
							onClick={() => handleTabChange("description")}
						>
							Description
						</Nav.Link>
					</Nav.Item>
				</Nav>
				<Tab.Content>
					<Tab.Pane eventKey="video">
						<VideoCard url={rhythm.url} />
					</Tab.Pane>
					<Tab.Pane eventKey="description">
						{" "}
						<div>
							<img
								width="30"
								height="25"
								src="https://img.icons8.com/ios/50/marker--v1.png"
								alt="marker--v1"
							/>{" "}
							{rhythm.location}
						</div>
						{rhythm.description}
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		);
	} else {
		modalContent = (
			<div>
				{rhythm.url && <VideoCard url={rhythm.url} />}
				{rhythm.audio && (
					<div>
						<ReactPlayer
							url={rhythm.audio}
							width="100%"
							height="auto"
							controls
						/>
					</div>
				)}
				{rhythm.description && (
					<div>
						<div>
							<img
								width="30"
								height="25"
								src="https://img.icons8.com/ios/50/marker--v1.png"
								alt="marker--v1"
							></img>
							{rhythm.location}
						</div>
						{rhythm.description}
					</div>
				)}
			</div>
		);
	}

	return (
		<Modal show={true}>
			<Modal.Header closeButton>
				<Modal.Title>
					{rhythm.rhythm}
					<button onClick={() => setModalOpen(false)}>CLOSE</button>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>{modalContent}</Modal.Body>
		</Modal>
	);
}

export default ModalVideo;
