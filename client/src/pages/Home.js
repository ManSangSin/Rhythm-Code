import { Link } from "react-router-dom";

import "./Home.css";
import MyMap from "../components/MyMap";

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
		</main>
	);
}

export default Home;
