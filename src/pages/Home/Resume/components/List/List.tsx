import { CSSProperties } from "react";
import { FCC } from "types/FCC";
import { stylesheet as ss } from "./styles";

interface Props {
	style?: CSSProperties;
}
export const List: FCC<Props> = ({ children, style }) => {
	return <ul style={{ ...ss.list, ...style }}>{children}</ul>;
};

export const Li1: FCC<Props> = ({ children, style }) => {
	return (
		<li style={{ ...ss.li, ...style }}>
			<span style={ss.bullet1}>&#8226;</span>
			{children}
		</li>
	);
};

export const Li2: FCC<Props> = ({ children, style }) => {
	return (
		<li style={{ ...ss.li, ...style }}>
			<span style={ss.bullet2}>&#10148;</span>
			{children}
		</li>
	);
};

export const LiPara: FCC = ({ children }) => {
	return <p style={{ ...ss.li, ...ss.liPara }}>{children}</p>;
};
