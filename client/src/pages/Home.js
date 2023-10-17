import "./Home.css";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import ArtistSection from "../components/ArtistSection";
import Footer from "../components/Footer";
import MyMap from "../components/MyMap";

function Home() {
	return (
		<main role="main">
			<Header />
			<MyMap />
			<AboutSection />
			<ArtistSection />
			<Footer />
		</main>
	);
}

export default Home;
