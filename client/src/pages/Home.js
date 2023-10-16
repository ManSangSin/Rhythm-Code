import "./Home.css";
import MyMap from "../components/MyMap";
import Header from "../components/Header";
import ArtistSection from "../components/ArtistSection";
import Footer from "../components/Footer";

function Home() {
	return (
		<main role="main">
			<Header />
			<MyMap />
      <ArtistSection />
			<Footer />
		</main>
	);
}

export default Home;
