import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import DataFetchingTest from "./pages/DataFetchingTest";


const App = () => (
	<>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/DataFetchingTest" element={<DataFetchingTest />} />
	</Routes>
	</>
);

export default App;
