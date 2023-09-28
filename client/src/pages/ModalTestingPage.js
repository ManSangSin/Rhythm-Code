import React from "react";
import ModalVideo from "../components/ModalVideo";

function ModalTestingPage(){
    const data =
        {
            title: "Rumba Guaguanco",
            url: "https://www.youtube.com/watch?v=gJVT_5swkhA",
            location: "Havana, Cuba",
        };

    return <div>
        <h2>Testing Modal</h2>
        <ModalVideo title={data.title} url={data.url} location={data.location} />

        </div>;

}

export default ModalTestingPage;