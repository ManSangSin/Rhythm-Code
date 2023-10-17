import React from "react";
import "./Hero.css";
import heroImage from "../images/heroImage.png";
const Content = {
	text1: {
		h1: "Black Atlantic Space-Time",
		h2: "A journey through ancestral rhythms",
	},
	text2: {
		quote: "“Africanist rhythms unify present, past and future in my body.”",
		name: "- Deirdre Molloy",
	},
};

const Hero = () => {
	return (
		<div className="hero-container">
			<div className="hero-text">
				<div className="subheader">
					<h1>{Content.text1.h1}</h1>
					<h2>{Content.text1.h2}</h2>
				</div>
				<div className="quote">
					<p className="sentence">{Content.text2.quote}</p>
					<p className="name">{Content.text2.name}</p>
				</div>
			</div>
			<div className="hero-image">
				<img src={heroImage} alt="dancer" />
			</div>
		</div>
	);
};

export default Hero;
