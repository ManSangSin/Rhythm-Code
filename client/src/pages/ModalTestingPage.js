import React from "react";
import ModalVideo from "../components/ModalVideo";

function ModalTestingPage(){
    const data = [
        {
            "title": "DC Hand dancing",
            "url": "https://www.youtube.com/watch?v=M6uM0qrjetQ",
            "location": "washington DC",
        },
        {
            "title": "Rumba Guaguanco",
            "url": "https://www.youtube.com/watch?v=gJVT_5swkhA",
            "location": "Havana, Cuba",
        },
    ];
    return <div>
        <h2>Testing Modal</h2>
        <ModalVideo />

        </div>;

}

export default ModalTestingPage;