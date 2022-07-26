import { ReactNode } from "react";
import { stylesheet as ss } from "./styles";
import { FCC } from "types/FCC";

interface IIconLink {
	href: string;
	icon: ReactNode;
	color?: string;
	variant?: "small" | undefined;
	inline?: boolean;
}

export const IconLink: FCC<IIconLink> = ({ children, href, variant, color, icon, inline }) => {
	return (
		<a
			style={{
				...ss.socialA,
				color,
				fontSize: variant === "small" ? 13 : undefined,
				opacity: variant === "small" ? 0.7 : undefined,
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
};

interface ILink1 {
	href: string;
	variant?: "small" | undefined;
}

export const Link1: FCC<ILink1> = ({ children, href, variant }) => {
	return (
		<a
			style={{
				...ss.a,
				fontSize: variant === "small" ? 13 : undefined,
				opacity: variant === "small" ? 0.7 : undefined,
			}}
			target="_blank"
			rel="noopener noreferrer"
			href={href}
		>
			{children}
		</a>
	);
};

interface ILink2 {
	href: string;
	prefix?: string;
	suffix?: string;
	removeSpace?: boolean;
}

export const Link2: FCC<ILink2> = ({ children, href, prefix, suffix, removeSpace = false }) => {
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
};
