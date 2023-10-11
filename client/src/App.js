import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ModalTestingPage from "./pages/ModalTestingPage";
import Home from "./pages/Home";

import RhythmsPanelTestingPage from "./pages/RhythmsPanelTestingPage";



const App = () => (
	<>
	<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/about/this/site" element={<About />} />
	<Route path="/testingpage" element={<ModalTestingPage />} />
	<Route path="/RhythmsPanelTestingPage" element={<RhythmsPanelTestingPage />} />
	</Routes>
	</>
);

export default App;
