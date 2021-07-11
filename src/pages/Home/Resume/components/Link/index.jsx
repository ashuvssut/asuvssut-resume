import React from "react";

import { stylesheet as ss } from "./styles";

export function Link1({ children, href, variant }) {
	return (
		<a
			style={{ ...ss.a, fontSize: variant === "small" && 13 }}
			target="_blank"
			rel="noopener noreferrer"
			href={href}
		>
			{children}
		</a>
	);
}

export function Link2({ children, href, prefix, suffix }) {
	return (
		<p style={ss.root}>
			{prefix !== undefined && `${prefix} `}
			<a style={ss.a} target="_blank" rel="noopener noreferrer" href={href}>
				{children}
			</a>
			{suffix !== undefined && ` ${suffix}`}
		</p>
	);
}
