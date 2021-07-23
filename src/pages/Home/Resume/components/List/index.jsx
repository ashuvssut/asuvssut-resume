import React from "react";
import { stylesheet as ss } from "./styles";

export function List({ children, style }) {
	return <ul style={{...ss.list, ...style}}>{children}</ul>;
}

export function Li1({ children, style }) {
	return (
		<li style={{...ss.li,...style}}>
			<span style={ss.bullet1}>&#8226;</span>
			{children}
		</li>
	);
}

export function Li2({ children, style }) {
	return (
		<li style={{...ss.li, ...style}}>
			<span style={ss.bullet2}>&#10148;</span>
			{children}
		</li>
	);
}

export function LiPara({ children }) {
	return <p style={{ ...ss.li, ...ss.liPara }}>{children}</p>;
}
