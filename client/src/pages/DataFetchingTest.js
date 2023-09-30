import React, { useEffect, useState } from "react";
function DataFetchingTest() {
    const [rhythms, setRhythms] = useState([]);

    const API_URL = "http://localhost:3000/api/rhythms";

   useEffect(() => {
	fetch(API_URL)
	.then((response) => {

		return response.json();

	})
        .then((data) => {
        console.log("Fetched Data:", data);
			setRhythms(data);

	})
	.catch((error) => {
		console.error("Error fetching data:", error);

	});
   }, []);
     return (
	<div>
		<h1>Rhythms</h1>
		<ul>
			{rhythms.map((rhythm, index) => (
				<li key={index}>

		<p>{rhythm.title}</p>
		<p>Location: {rhythm.location}</p>
		<a href={rhythm.url} >
						Link to Video
		</a>
				</li>

			))}
	</ul>
	</div>
 );
}
export default DataFetchingTest;
