import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ModalTestingPage from "./pages/ModalTestingPage";
import Home from "./pages/Home";
import SliderTest from "./pages/SliderTest";

import RhythmsPanelTestingPage from "./pages/RhythmsPanelTestingPage";



const App = () => (
	<>
	<Routes>
	<Route path="/" element={<Home />} />
		<Route path="/SliderTest" element={<SliderTest />} />
		<Route path="/ModalTestingPage" element={<ModalTestingPage />} />
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/RhythmsPanelTestingPage" element={<RhythmsPanelTestingPage />}
			/></Routes>
	</>
);

export default App;
