import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ReactPlayer from "react-player";

import VideoCard from "./VideoCard";

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
						<VideoCard url={url} />
					</Tab.Pane>
					<Tab.Pane eventKey="description">{description}</Tab.Pane>
				</Tab.Content>
			</Tab.Container>
		);
	} else if (audioUrl && description) {
		modalContent = (
			<div>
				{audioUrl && (
					<div>
						<ReactPlayer url={audioUrl} width="100%" height="auto" controls />
						<br></br>
						<div>Description: {description}</div>
					</div>
				)}
			</div>
		);
	} else {
		modalContent = (
			<div>
				{url && <VideoCard url={url} />}
				{description && <div>Description: {description}</div>}
				{audioUrl && (
					<div>
						<ReactPlayer url={audioUrl} width="100%" height="auto" controls />
					</div>
				)}
			</div>
		);
	}

	return (
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
			<Modal.Header closeButton>
			<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					{/* I know this is not perfect! */}
					<img
						width="30"
						height="25"
						src="https://img.icons8.com/ios/50/marker--v1.png"
						alt="marker--v1"
					/>{" "}
					{location}
				</p>
				{modalContent}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				{/* // Is this button required? */}
				<Button variant="primary">Understood</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default ModalVideo;
