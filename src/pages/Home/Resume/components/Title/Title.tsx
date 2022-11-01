import { CSSProperties, FC } from "react";
import { FCC } from "types/FCC";
import { stylesheet as ss } from "./styles";

export const H1: FCC<{ style?: CSSProperties }> = ({ children, style }) => {
	return <h3 style={{ ...ss.h1, ...style }}>{children}</h3>;
};

export const H2: FCC<{ style?: CSSProperties }> = ({ children, style }) => {
	return <h4 style={{ ...ss.h2, ...style }}>{children}</h4>;
};

interface IMixedTitle {
	h1: string;
	h2: string;
}
export const MixedTitle: FC<IMixedTitle> = ({ h1, h2 }) => {
	return (
		<div style={{ marginBottom: 2 }}>
			<h3 style={{ ...ss.h1, marginBottom: 0, display: "inline" }}>{h1}</h3>
			{" | "}
			<h4 style={{ ...ss.h2, marginBottom: 0, display: "inline", whiteSpace: "nowrap" }}>{h2}</h4>
		</div>
	);
};

export const SubTitle1: FCC<{ style?: CSSProperties }> = ({ children, style }) => {
	return <h4 style={{ ...ss.subtitle1, ...style }}>{children}</h4>;
};

export const SubTitle2: FCC = ({ children }) => {
	return <h4 style={ss.subtitle2}>{children}</h4>;
};
