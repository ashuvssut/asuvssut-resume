import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./components/Header";
// import Footer from "./components/Footer/Footer";
import NotFound from "./pages/404";
import "./index.scss";
import Preloader from "./components/Preloader";

const Home = lazy(() => import("./pages/Home"));

function App({ location }) {
  return (
		<Suspense fallback={<Preloader />}>
			{location.pathname !== "/404" && <Header />}
			<Switch>
				<Route path="/ashuvssut-resume" exact component={Home} />
				<Route path="/ashuvssut-resume/404" exact component={NotFound} />
				<Redirect to="/ashuvssut-resume/404" />
			</Switch>
			{/* {location.pathname !== "/404" && <Footer />} */}
		</Suspense>
	);
}

export default withRouter(App);
