import { Route, Routes } from "react-router-dom";
import ModalTestingPage from "./pages/ModalTestingPage";
import About from "./pages/About";
import Home from "./pages/Home";


const App = () => (
	<>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/modaltesting" element={<ModalTestingPage />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
	</>
);

export default App;
