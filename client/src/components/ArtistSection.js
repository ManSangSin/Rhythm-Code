import React from "react";
import Group from "../images/Group.png";
import Deidre from "../images/deidre_profile.png";
import Dot from "../images/dot_background.png";
function ArtistSection(){
    return <div className="artist">
        <div className="text">
            <h4>Artist & Dance Researcher Deidre Molloy</h4>
            <span>Doctoral student at University College Cork</span>
            <p>Deirdre has always danced. Her research centres dance as a decolonizing resource of collective knowledge and innovation.
                This Afrocentric arts research is suited to film, photography, music and performance collaborations – so be in touch!
            </p>
            <a href="https://www.ucc.ie/en/fmt/doctoralschool/phdcandidates/#deirdre-molloy">
            <button className="learn">Learn more</button>
            </a>
            <a href="https://www.linkedin.com/in/deirdre-clare-molloy/">
                <button className="contact"><img src={Group} alt="envelope"></img>Get in touch</button>
            </a>
        </div>
        <div className="image" >
            <img className="backgroundImage" src={Dot} alt="dots"></img>
            <img className="portrait" src={Deidre} alt="Deidre Molloy"></img>
        </div>
    </div>;
}

export default ArtistSection;