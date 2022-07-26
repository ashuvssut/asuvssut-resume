import { FC, ReactNode } from "react";
import { stylesheet as ss } from "./styles";

interface ISection {
	title: string;
	noMarginTop?: boolean;
	children: ReactNode;
}

export const Section: FC<ISection> = ({ title, noMarginTop, children }) => {
	return (
		<div style={ss.section}>
			<h2 style={noMarginTop ? { ...ss.title, marginTop: 0 } : ss.title}>{title}</h2>
			{children}
		</div>
	);
};
