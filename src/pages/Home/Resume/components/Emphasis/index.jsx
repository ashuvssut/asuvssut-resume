import React from "react";

export function B({ children }) {
	return (
		<span
			style={{
				fontWeight: 600,
			}}
		>
			{children}
		</span>
	);
}

export function I({ children }) {
	return <span style={{ fontStyle: "italic" }}>{children}</span>;
}

export function BI({ children }) {
	return (
		<B>
			<I>{children}</I>
		</B>
	);
}
