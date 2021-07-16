import React from "react";
import { stylesheet as ss } from "./styles";

export function List({ children }) {
	return <ul style={ss.list}>{children}</ul>;
}

export function Li1({ children }) {
	return (
		<li style={ss.li}>
			<span style={ss.bullet1}>&#8226;</span>
			{children}
		</li>
	);
}

export function Li2({ children }) {
	return (
		<li style={ss.li}>
			<span style={ss.bullet2}>&#10148;</span>
			{children}
		</li>
	);
}

export function LiPara({ children }) {
	return <p style={{ ...ss.li, ...ss.liPara }}>{children}</p>;
}
