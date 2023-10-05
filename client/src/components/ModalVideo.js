import React, { useState } from "react";
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
					<Tab.Pane eventKey="description">
						{" "}
						<div>
							<img
								width="30"
								height="25"
								src="https://img.icons8.com/ios/50/marker--v1.png"
								alt="marker--v1"
							/>{" "}
							{location}
						</div>
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
					<div>
						<ReactPlayer url={audioUrl} width="100%" height="auto" controls />
					</div>
				)}
				{description && (
					<div>
						<div>
							<img
								width="30"
								height="25"
								src="https://img.icons8.com/ios/50/marker--v1.png"
								alt="marker--v1"></img>
							{location}
						</div>
						{description}
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
				{modalContent}
			</Modal.Body>
		</Modal>
	);
}

export default ModalVideo;
