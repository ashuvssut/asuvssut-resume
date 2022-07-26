import { IStyleSheet } from "types/IStyleSheet";

export const stylesheet: IStyleSheet = {
	htmlBody: {
		background: "#323639",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontFamily: '"Raleway", sans-serif',
		position: "relative",
	},
	page: {
		minWidth: "21cm",
		maxWidth: "21cm",
		minHeight: "29.7cm",
		maxHeight: "29.7cm",
		background: "white",
		display: "block",
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
	},
	content: {
		position: "absolute",
		inset: "0px",
	},
};
