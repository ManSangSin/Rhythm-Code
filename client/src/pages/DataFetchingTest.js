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
								<h2>{rhythm.title}</h2>
								<p>Location: {rhythm.location}</p>
								<a href={rhythm.url} >
									Watch Video
								</a>
							</li>
						))}
					</ul>
				</div>
			);
}
export default DataFetchingTest;