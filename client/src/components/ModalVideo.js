import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import VideoCard from "./VideoCard";

function ModalVideo({ title, url, description, show, handleClose, location }) {
  const [activeTab, setActiveTab] = useState("video");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{location}</p>
        {url && description ? (
          <Tab.Container activeKey={activeTab}>
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link
                  eventKey="video"
                  onClick={() => handleTabChange("video")}
                >
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
        ) : (
          <div>
            {url && <VideoCard url={url} />}
            {description && <div>Description: {description}</div>}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalVideo;
