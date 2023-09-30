import { Route, Routes } from "react-router-dom";
import ModalTestingPage from "./pages/ModalTestingPage";
import About from "./pages/About";
import Home from "./pages/Home";
import DataFetchingTest from "./pages/DataFetchingTest";


const App = () => (
	<>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/modaltesting" element={<ModalTestingPage />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/DataFetchingTest" element={<DataFetchingTest />} />
	</Routes>
	</>
);

export default App;
