import { FCC } from "types/FCC";

interface Emphasis {
	nsp?: boolean;
}
export const B: FCC<Emphasis> = ({ children, nsp }) => {
	return (
		<>
			{!nsp && <>&nbsp;</>}
			<span
				style={{
					fontWeight: 600,
				}}
			>
				{children}
			</span>
			&nbsp;
		</>
	);
};

export const I: FCC<Emphasis> = ({ children, nsp }) => {
	return (
		<>
			{!nsp && <>&nbsp;</>}
			<span style={{ fontStyle: "italic" }}>{children}</span>&nbsp;
		</>
	);
};

export const BI: FCC<Emphasis> = ({ children, nsp }) => {
	return (
		<>
			{!nsp && <>&nbsp;</>}
			<span style={{ fontStyle: "italic", fontWeight: 800 }}>{children}</span>&nbsp;
		</>
	);
};
