import React from "react";

import Link from "./components/Link";

import { stylesheet as ss } from "./styles";

function Resume() {
	return (
		<>
			<header style={ss.header}>
				<h1 style={ss.firstName}>
					Ashutosh <span style={ss.lastName}>Khanduala</span>
				</h1>
				<p style={ss.line}>
					<Link href="https://ashuvssut.github.io/my-portfolio/">
						ashuvssut.github.io/my-portfolio/
					</Link>
				</p>
				<p style={ss.line}>
					<Link href="mailto:ashu.khanduala@gmail.com">
						ashu.khanduala@gmail.com
					</Link>
					| +91 8114 727 882
				</p>
			</header>
			<hr />
		</>
	);
}

export default Resume;
