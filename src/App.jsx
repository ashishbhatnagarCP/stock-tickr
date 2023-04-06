import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StockOverview from "./components/StockOverview";
import StockDetails from "./components/StockDetails";

export default function App() {
	return (
		<main>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<StockOverview />} />
					<Route path="/detail/:symbol" element={<StockDetails />} />
				</Routes>
			</BrowserRouter>
		</main>
	)
}
