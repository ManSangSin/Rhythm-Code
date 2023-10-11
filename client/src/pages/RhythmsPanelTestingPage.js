// import { useState, useEffect } from "react";

// import CityIcon from "./CityIcon";
// import ModalVideo from "../components/ModalVideo";
// import Dropdown from "../components/Dropdown";

// const RhythmsDropDown = () => {
// 	const [open, setOpen] = useState(false);

// 	const [rhythms, setRhythms] = useState([]);

// 	const API_URL = "/api/rhythms";

// 	useEffect(() => {
// 		fetch(API_URL)
// 			.then((response) => {
// 				return response.json();
// 			})
// 			.then((data) => {
// 				console.log("YAY! Fetched these:", data);
// 				setRhythms(data);
// 			})
// 			.catch((error) => {
// 				console.error("NOPE! Error fetching data from backend:", error);
// 			});
// 	}, []);


// 	const handleOpen = () => {
// 		// toggles value of open
// 		setOpen(!open); // negates value of open
// 	};

// 	const handleMenuClick = (rhythmObject) => {
// 		console.log(`Clicked rhythm: ${rhythmObject.rhythm}`);
// 		setOpen(false);
// 		<ModalVideo
// 			show={show}
// 			handleClose={handleClose}
// 			title={selectedIcon ? selectedIcon.rhythm : ""}
// 			url={selectedIcon ? selectedIcon.video : ""}
// 			location={selectedIcon ? selectedIcon.location : ""}
// 			audiourl={selectedIcon ? selectedIcon.audio : ""}
// 			description={selectedIcon ? selectedIcon.description : ""}
// 		/>;

// 	};


// 	return (
// 		<Dropdown
// 			open={open}
// 			trigger={
// 				<button onClick={handleOpen}>
// 					<CityIcon />
// 				</button>
// 			}
// 			rhythmMenuList={rhythms.map((rhythmObject) => (
// 				<button
// 					key={rhythmObject.id}
// 					onClick={() => handleMenuClick(rhythmObject)}
// 				>
// 					{rhythmObject.rhythm}
// 				</button>
// 			))}
// 		/>
// 	);
// };

// export default RhythmsDropDown;