import React from "react";

import { stylesheet as ss } from "./styles";

export function H1({ children }) {
	return <h3 style={ss.h1}>{children}</h3>;
}

export function H2({ children }) {
	return <h4 style={ss.h2}>{children}</h4>;
}

export function MixedTitle({ h1, h2 }) {
	return (
		<div style={{ marginBottom: 3 }}>
			<h3 style={{ ...ss.h1, marginBottom: 0, display: "inline" }}>{h1}</h3>
			{" | "}
			<h4 style={{ ...ss.h2, marginBottom: 0, display: "inline", whiteSpace: "nowrap" }}>{h2}</h4>
		</div>
	);
}

export function SubTitle1({ children }) {
	return <h4 style={ss.subtitle1}>{children}</h4>;
}

export function SubTitle2({ children }) {
	return <h4 style={ss.subtitle2}>{children}</h4>;
}
