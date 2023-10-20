import "./Home.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import AboutSection from "../components/AboutSection";
import ArtistSection from "../components/ArtistSection";
import Footer from "../components/Footer";

function Home() {
	return (
		<main role="main">
			<Header />
			<Hero />
			<MapSection />
			<AboutSection />
			<ArtistSection />
			<Footer />
		</main>
	);
}

export default Home;
