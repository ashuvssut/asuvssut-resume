import React from "react";

import { stylesheet as ss } from "./styles";

export function IconLink({ children, href, variant, color, icon, inline }) {
	return (
		<a
			style={{
				...ss.socialA,
				color,
				fontSize: variant === "small" && 13,
				opacity: variant === "small" && 0.7,
				textDecoration: "none",
				display: inline ? "inline" : "flex",
			}}
			target="_blank"
			rel="noopener noreferrer"
			href={href}
		>
			{icon}
			{children}
		</a>
	);
}

export function Link1({ children, href, variant }) {
	return (
		<a
			style={{
				...ss.a,
				fontSize: variant === "small" && 13,
				opacity: variant === "small" && 0.7,
			}}
			target="_blank"
			rel="noopener noreferrer"
			href={href}
		>
			{children}
		</a>
	);
}

export function Link2({ children, href, prefix, suffix, removeSpace = false }) {
	return (
		<p style={ss.root}>
			{prefix !== undefined && prefix}
			{removeSpace === false && " "}
			<a style={ss.a} target="_blank" rel="noopener noreferrer" href={href}>
				{children}
			</a>
			{removeSpace === false && " "}
			{suffix !== undefined && suffix}
		</p>
	);
}
