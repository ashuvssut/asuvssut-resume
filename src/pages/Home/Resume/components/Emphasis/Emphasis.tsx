import { FCC } from "types/FCC";

export const B: FCC = ({ children }) => {
	return (
		<span
			style={{
				fontWeight: 600,
			}}
		>
			{children}
		</span>
	);
};

export const I: FCC = ({ children }) => {
	return <span style={{ fontStyle: "italic" }}>{children}</span>;
};

export const BI: FCC = ({ children }) => {
	return <span style={{ fontStyle: "italic", fontWeight: 800 }}>{children}</span>;
};
