import React from "react";
import { stylesheet as ss } from "./styles";

export function List({ children }) {
	return <div style={ss.list}>{children}</div>;
}

export function Li1({ children }) {
	return (
		<p style={ss.li}>
			<span style={ss.bullet1}>&#8226;</span>
			{children}
		</p>
	);
}

export function Li2({ children }) {
	return (
		<p style={ss.li}>
			<span style={ss.bullet2}>&#10148;</span>
			{children}
		</p>
	);
}

export function LiPara({ children }) {
	return <p style={{ ...ss.li, ...ss.liPara }}>{children}</p>;
}
