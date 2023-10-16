import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "./ModalVideo.css";
import VideoCard from "./VideoCard";
import CustomAudioPlayer from "./CustomAudioPlayer";

function ModalVideo({
	title,
	url,
	audioUrl,
	description,
	show,
	handleClose,
	location,
}) {
	const [activeTab, setActiveTab] = useState("video");

	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	let modalContent;

	if (url && description) {
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
						<VideoCard url={url} />
					</Tab.Pane>
					<Tab.Pane className="text" eventKey="description">
						{description}
					</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		);
	} else {
		modalContent = (
			<div>
				{url && <VideoCard url={url} />}
				{audioUrl && (
					<CustomAudioPlayer audioUrl={audioUrl} />
				)}
				{description && <div className="text">{description}</div>}
			</div>
		);
	}

	return (
		<Modal
			show={show}
			onHide={handleClose}
			backdrop="static"
			keyboard={false}
		>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{modalContent}</Modal.Body>
		</Modal>
	);
}

export default ModalVideo;
