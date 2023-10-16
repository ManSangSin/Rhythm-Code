import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "./ModalVideo.css";
import VideoCard from "./VideoCard";
import CustomAudioPlayer from "./CustomAudioPlayer";

function ModalVideo({ rhythm, setModalOpen }) {
	const [activeTab, setActiveTab] = useState("video");

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	let modalContent;

	if (rhythm.video && rhythm.description) {
		modalContent = (
			<Tab.Container activeKey={activeTab}>
				<Nav variant="tabs">
					<Nav.Item>
						<Nav.Link eventKey="video" onClick={() => handleTabChange("video")}>
							<img
								width="25"
								height="20"
								src="https://img.icons8.com/ios-glyphs/30/play--v1.png"
								alt="play--v1"
							/>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							eventKey="description"
							onClick={() => handleTabChange("description")}
						>
							<img
								width="25"
								height="20"
								src="https://img.icons8.com/external-febrian-hidayat-glyph-febrian-hidayat/64/external-paragraph-ui-essential-febrian-hidayat-glyph-febrian-hidayat.png"
								alt="external-paragraph-ui-essential-febrian-hidayat-glyph-febrian-hidayat"
							/>
						</Nav.Link>
					</Nav.Item>
				</Nav>
				<Tab.Content>
					<Tab.Pane eventKey="video">
						<VideoCard url={rhythm.video} />
					</Tab.Pane>
					<Tab.Pane className="text" eventKey="description">
						{rhythm.description}
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		);
	} else {
		modalContent = (
			<div>
				{rhythm.video && <VideoCard url={rhythm.video} />}
				{rhythm.audio && <CustomAudioPlayer audioUrl={rhythm.audio} />}
				{rhythm.description && <div className="text">{rhythm.description}</div>}
			</div>
		);
	}

	return (
		<Modal show={true} onHide={() => setModalOpen(false)}>
			<Modal.Header closeButton>
				<Modal.Title>{rhythm.rhythm}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{modalContent}</Modal.Body>
		</Modal>
	);
}

export default ModalVideo;
