import colors from "scss/_colors.module.scss";
import { IStyleSheet } from "types/IStyleSheet";
export const stylesheet: IStyleSheet = {
	header: {
		textAlign: "center",
		paddingTop: 20,
		paddingBottom: 10,
	},
	name: {
		fontSize: "30px",
		margin: "0",
		fontWeight: 100,
		color: colors.grey52,
		lineHeight: 1.1,
	},
	line: {
		fontFamily: '"Raleway", sans-serif',
		fontWeight: 600,
		fontSize: "14px",
		color: colors.grey,
		textShadow: "0 0 1px rgba(0, 0, 0, 0.15)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},

	main: {
		display: "flex",
		padding: 30,
		paddingTop: 8,
	},
	firstCol: {
		minWidth: 314,
		maxWidth: 314,
		paddingRight: 17,
	},
	card: {
		marginBottom: 10,
	},
};
