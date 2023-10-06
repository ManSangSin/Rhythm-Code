import React from "react";
import RhythmsWithSlider from "../components/RhythmsWithSlider";
 const rhythms = [
		{
			title: "DC Hand dancing",
			url: "https://www.youtube.com/watch?v=M6uM0qrjetQ",
			location: "Washington DC",
			description: "I have both Video and Description",
			timePeriod: "1500-2010",
		},
		{
			title: "Rumba Guaguanco",
			location: "Havana, Cuba",
			description: "I have no video to play, for more information google me!",
			timePeriod: "1600-1800",
		},
		{
			title: "DC Hand dancing 2",
			url: "https://www.youtube.com/watch?v=M6uM0qrjetQ",
			location: "Washington DC",
			timePeriod: "1700-2000",
		},
		{
			title: "Adaha and Konkoma",
			audioUrl:
				"https://soundcloud.com/shugo_srd/shugz-king-of-my-castle?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
			location: "Washington DC",
			timePeriod: "2015-2020",
		},
		{
			title: "Dance Band Highlife",
			audioUrl:
				"https://soundcloud.com/eduleon42/are-we-going-out-tonight-vol-3?si=0cd23cdd892b41c6ad451505b21c0d3f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
			location: "Washington DC",
			description:
				"Dance band likely had its immediate roots in the orchestras founded and popularized by West African coastal elites who lived in the region’s expanding colonial and cosmopolitan cities",
			timePeriod: "1900-2008",
		},
 ];

const SliderTest = () => {
	return (
		<div>
			<h1>Testing the date filtering </h1>
			<RhythmsWithSlider rhythms={rhythms} />
		</div>
	);
};

export default SliderTest;
