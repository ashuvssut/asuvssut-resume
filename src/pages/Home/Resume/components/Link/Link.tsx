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
		<>
			&nbsp;
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
			&nbsp;
		</>
	);
};

interface ILink {
	href: string;
	variant?: "small" | undefined;
	nsp?: boolean;
}

export const Link: FCC<ILink> = ({ children, href, variant, nsp = false }) => {
	return (
		<>
			{!nsp && <>&nbsp;</>}
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
			&nbsp;
		</>
	);
};

interface ILinkBr {
	href: string;
	prefix?: string;
	suffix?: string;
	nsp?: boolean;
}

export const LinkBr: FCC<ILinkBr> = ({ children, href, prefix, suffix, nsp = false }) => {
	return (
		<p style={ss.root}>
			{!nsp && <>&nbsp;</>}
			{prefix !== undefined && <>{prefix}&nbsp;</>}
			<a style={ss.a} target="_blank" rel="noopener noreferrer" href={href}>
				{children}
			</a>
			&nbsp;{suffix !== undefined && <>{suffix}&nbsp;</>}
		</p>
	);
};
