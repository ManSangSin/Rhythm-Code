import { Link } from "react-router-dom";

import "./Home.css";
import MyMap from "../components/MyMap";
import ModalVideo from "../components/ModalVideo";
import CityIcon from "./CityIcon";
import DotMap from "../components/DotMap";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
	return (
		<main role="main">
			<MyMap />
			<br />
			<br />
			<br />
			<Link to="/about/this/site">About</Link>
			<br />
			<br />
			<Link to="/testingpage">Modal Testing Page</Link>

				<br></br>
				<Link to="/ModalTestingPage">Modal Testing</Link>
				<br></br>
				<Link to="/SliderTest">slider test</Link>
		
				<br></br>
				<br></br>
				<Link to="/RhythmsPanelTestingPage">RhythmsPanelTestingPage</Link>
				<Link to="/ModalTestingPage">Modal Testing Page</Link>
			</div>
			<Footer />
		</main>
	);
}

export default Home;
