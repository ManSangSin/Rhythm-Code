import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MapSection from "./components/MapSection";

const App = () => (
	<>
	<Routes>
	<Route path="/" element={<Home />} />
	<Route path="/MapSection" element={<MapSection />}></Route>
	</Routes>
	</>
);

export default App;
