import React from "react";
import "./Hero.css";
import heroImage from "../images/heroImage.png";

const content = {
	text1: (
		<div className="subheader">
			<h1>Black Atlantic Space-Time</h1>
			<h2>A journey through ancestral rhythms</h2>
		</div>
	),
	text2: (
		<div className="quote">
			<p className="sentence">
				“Africanist rhythms unify present, past and future in my body.”
			</p>
			<p className="name">- Deirdre Molloy</p>
		</div>
	),
};

const Hero = () => {
	return (
		<div className="hero-container">
			<div className="hero-text">
				{content.text1}
				{content.text2}
			</div>
			<div className="hero-image">
				<img src={heroImage} alt="dancer"></img>
			</div>
		</div>
	);
};

export default Hero;
