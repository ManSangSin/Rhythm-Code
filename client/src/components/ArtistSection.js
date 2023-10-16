import React from "react";
import Group from "../images/Group.png";
import Deidre from "../images/deidre_profile.png";
import Dot from "../images/dot_background.png";
import "./ArtistSection.css";

const content={
    title:"Artist & Dance Researcher Deidre Molloy",
    subtitle: "Doctoral student at University College Cork",
    paragraph: "Deirdre has always danced. Her research centres dance as a decolonizing resource of collective knowledge and innovation.This Afrocentric arts research is suited to film, photography, music and performance collaborations – so be in touch!",
    learnLink: "https://www.ucc.ie/en/fmt/doctoralschool/phdcandidates/#deirdre-molloy",
    contactLink: "https://www.linkedin.com/in/deirdre-clare-molloy/",
};

function ArtistSection(){
    return <div className="artist">
        <div className="text">
            <h4>{content.title}</h4>
            <span>{content.subtitle}</span>
            <p>{content.paragraph}</p>
            <a href={content.learnLink}>
            <button className="learn">Learn more</button>
            </a>
            <a href={content.contactLink}>
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