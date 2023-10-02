// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import ModalVideo from "../components/ModalVideo";

// function ModalTestingPage(){
//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     const data =
//         {
//             title: "Rumba Guaguanco",
//             url: "https://www.youtube.com/watch?v=gJVT_5swkhA",
//             location: "Havana, Cuba",
//         };

//     return <div>
//         <h2>Testing Modal</h2>
//         <Button variant="primary" onClick={handleShow}>
//             Explore Rhythm
//         </Button>
//         <ModalVideo show={show} handleClose={handleClose} title={data.title} url={data.url} location={data.location} />

//         </div>;

// }

// export default ModalTestingPage;