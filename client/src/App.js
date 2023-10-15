import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ModalTestingPage from "./pages/ModalTestingPage";
import Home from "./pages/Home";
import MapSection from "./components/MapSection";
import SliderTest from "./pages/SliderTest";


const App = () => (
	<>
	<Routes>
	<Route path="/" element={<Home />} />
		<Route path="/SliderTest" element={<SliderTest />} />
		<Route path="/ModalTestingPage" element={<ModalTestingPage />} />
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/ModalTestingPage" element={<ModalTestingPage />} />
		<Route path="/RhythmsPanelTestingPage" element={<RhythmsPanelTestingPage />} />
		<Route path="/MapSection" element={<MapSection />}></Route>
	</Routes>
	</>
);

export default App;
