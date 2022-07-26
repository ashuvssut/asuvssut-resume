import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import { Header } from "components/Header";
import { NotFound } from "pages/404";
import { Preloader } from "components/Preloader";
import "./index.scss";

const Home = lazy(() => import("./pages/Home"));

function App() {
	let location = useLocation();
	return (
		<Suspense fallback={<Preloader />}>
			{location.pathname !== "/404" && <Header />}
			<Routes>
				<Route path="/" element={<Navigate to="/ashuvssut-resume" replace />} />
				<Route path="/ashuvssut-resume" element={<Home />} />
				<Route path="*" element={<Navigate to="/ashuvssut-resume/404" replace />} />
				<Route path="/ashuvssut-resume/404" element={<NotFound />} />
			</Routes>
			{/* {location.pathname !== "/404" && <Footer />} */}
		</Suspense>
	);
}

export default App;
