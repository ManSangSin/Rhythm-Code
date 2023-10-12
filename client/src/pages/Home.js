import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import CityIcon from "./CityIcon";
import DotMap from "../components/DotMap";
import ModalVideo from "../components/ModalVideo";

function MyMap() {
	const [rhythmCodes, setRhythmCodes] = useState([]);
	const [rhythms, setRhythms] = useState([]);

	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedRhythm, setSelectedRhythm] = useState({});

	const API_Rhythms_URL = "/api/rhythms";

	useEffect(() => {
		fetch(API_Rhythms_URL)
			.then((response) => response.json())
			.then((rhythms) => {
				setRhythms(rhythms);
				let rhythmsCodes = rhythms.reduce((acc, rhythm) => {
					const existingRhythm = acc.find(
						(item) => item.rhythm_code === rhythm.rhythm_code
					);
					if (!existingRhythm) {
						acc.push({
							rhythm_code: rhythm.rhythm_code,
							leftpx: rhythm.leftpx,
							toppx: rhythm.toppx,
						});
					}
					return acc;
				}, []);
				console.log(rhythmsCodes);
				setRhythmCodes(rhythmsCodes);
			})
			.catch((error) => {
				console.error("NOPE! Rhythms:", error);
			});
	}, []);

	return (
		<div>
			{/* where to close DotMap to have icons on and not under? */}
				{rhythmCodes.map((rhythmCodeObject) => {
					return (
						<CityIcon
							key={rhythmCodeObject.rhythm_code}
							rhythmCodeName={rhythmCodeObject.rhythm_code}
							rhythmsList={rhythms}
							setModalOpen={setModalOpen}
							setSelectedRhythm={setSelectedRhythm}
						/>
					);
				})}
				{isModalOpen &&
					<ModalVideo setModalOpen={setModalOpen} rhythm={selectedRhythm} />
				};
			<DotMap className="map" />
		</div>
	);
}

// return <div>
//         <span>map</span>
//         {rhythmCodes.map((item)=>{
//            return <MyRhythmCode key={item.rhythm_code} name={item.rhythm_code} rhythmsList={rhythms} setModalOpen={setModalOpen} setSelectedRhythm={setSelectedRhythm} />;
//         })}
//         {isModalOpen && <MyModal setModalOpen={setModalOpen} rhythm={selectedRhythm} />}
//     </div>;
// }


function Home() {
	return (
		<main role="main">
			<MyMap />
			<br />
			<br />
			<br />
			<Link to="/about/this/site">About</Link>
			<br />
			<Link to="/RhythmsPanelTestingPage">RhythmsPanelTestingPage</Link>
			<br />
			<Link to="/testingpage">Modal Testing Page</Link>
		</main>
	);
}

export default Home;




///////////////////////////////////////////////////////////////////////////

	// // toggles value of open for dropdown
	// const handleCloseDropdown = () => {
	// 	// --> when you click the li this closes (go in dropdown component?)
	// 	console.log("OPEN DROPDOWN NOW");
	// 	setOpenDropdown(!open); // negates value of open
	// };

	// // handleclick for dropdown
	// const handleShowDropdown = (rhythmObject) => {
	// 	console.log(`Clicked rhythm: ${rhythmObject.rhythm}`);
	// 	setOpenDropdown(false); // needs to be negated to close - TODO! see above - condense with this
	// };

	// // handleclick for modal
	// const handleCloseModal = () => setShowModal(false); // close modal
	// const handleShowModal = (rhythmObject) => {
	// 	// show modal
	// 	setShowModal(true);
	// 	setSelectedIcon(rhythmObject); // useState to store the selected video info
	// };

	//////////////////////////////////////////////////////////////////////////////

	// <ModalVideo
	// 	showModal={showModal}
	// 	handleCloseModal={handleCloseModal}
	// 	title={selectedIcon ? selectedIcon.rhythm : ""}
	// 	url={selectedIcon ? selectedIcon.video : ""}
	// 	location={selectedIcon ? selectedIcon.location : ""}
	// 	audiourl={selectedIcon ? selectedIcon.audio : ""}
	// 	description={selectedIcon ? selectedIcon.description : ""}
	// />;

	//////////////////////////////////////////////////////////////////////////////