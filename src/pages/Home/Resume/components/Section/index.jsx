import React from "react";

import { stylesheet as ss } from "./styles";

function Section({ title, noMarginTop, children }) {
	return (
		<div style={ss.section}>
			<h2 style={noMarginTop ? { ...ss.title, marginTop: 0 } : ss.title}>{title}</h2>
			{children}
		</div>
	);
}

export default Section;
