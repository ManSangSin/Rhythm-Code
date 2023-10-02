import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalVideo from "../components/ModalVideo";

const rhythms = [
    {
        title: "DC Hand dancing",
        url: "https://www.youtube.com/watch?v=M6uM0qrjetQ",
        location: "Washington DC",
        description: "This is a description of rhythm of ....",
    },
    {
        title: "Rumba Guaguanco",
        location: "Havana, Cuba",
        description: "This is a description of rhythm of ....",
    },
    {
        title: "DC Hand dancing 2",
        url: "https://www.youtube.com/watch?v=M6uM0qrjetQ",
        location: "Washington DC",
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
           {/* just add some temporary style */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width:"12rem" }}>
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
          description={selectedRhythm.description}
          location={selectedRhythm.location}
        />
      )}
    </div>
  );
}

export default ModalTestingPage;
