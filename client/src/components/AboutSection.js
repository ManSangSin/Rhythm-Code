import React from "react";

import "./AboutSection.css";
import Dancers from "../images/about-dancers.png";

const content = {
	title: "Mapping Black Atlantic Rhythms",
	firstParagraph:
		"Do you love music or dance? Have you ever wondered about the African roots of hip-hop, jazz, blues and reggae or dancehall, gwo-ka, samba or tango? ",
	secondParagraph:
		"In ancestral rituals of West Africa, rhythm, dance and music are unified – effectively creating ‘codes’ of embodied, ancestral knowledge. Traditional rituals engage all the senses, they are emotionally intense and repetitive. Like learning to perform a song, ride a bike or drive a car – this knowledge is encoded in muscle memory. The African drum-dance circle – the jam, the cipher, the battle – not only encodes knowledge but creates a unique space for improvisation.",
	thirdParagraph:
		"If knowledge survived slavery in diaspora muscle memory – inspiring a continuous stream of dance and music innovation across Afro-diasporic space-time, can we experience this fragmented heritage as a virtual journey?",
	fourthParagraph:
		"Black Atlantic Rhythm Codes is a visual prototype of a geo-mapped journey through living heritage, featuring voices and performances from Africa and its diaspora in the Americas.",
};

function AboutSection() {
	return (
		<div className="about-background">
			<div className="about-section">
				<div className="about-image-container">
					<img
						className="about-dancers-image"
						src={Dancers}
						alt="dancers"
					></img>
				</div>
				<div className="about-text-container">
					<h4>{content.title}</h4>
					<p>{content.firstParagraph}</p>
					<p>{content.secondParagraph}</p>
					<p>{content.thirdParagraph}</p>
					<p>{content.fourthParagraph}</p>
				</div>
			</div>
		</div>
	);
}

export default AboutSection;
