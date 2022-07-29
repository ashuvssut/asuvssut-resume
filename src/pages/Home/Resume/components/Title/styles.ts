import colors from "scss/_colors.module.scss";
import { IStyleSheet } from "types/IStyleSheet";

export const stylesheet: IStyleSheet = {
	h1: {
		fontWeight: 600,
		color: colors.darkGrey,
		fontSize: "13px",
		marginBottom: 3,
		textShadow: "0 0 1px rgba(0, 0, 0, 0.4)",
		lineHeight: 1.13,
		textTransform: "uppercase",
	},
	h2: {
		color: colors.darkGrey,
		fontFamily: '"Lato", sans-serif',
		fontSize: "12px",
		fontSizeAdjust: "0.5",
		fontWeight: 500,
		fontVariantCaps: "small-caps",
		marginTop: 3,
		textShadow: "0 0 1px rgba(0, 0, 0, 0.3)",
	},
	subtitle1: {
		color: colors.grey,
		fontWeight: 600,
		fontFamily: '"Raleway", sans-serif',
		fontSize: "11.5px",
		fontVariantCaps: "small-caps",
		marginBottom: 3,
	},
	subtitle2: {
		color: colors.grey,
		fontWeight: 600,
		fontFamily: '"Raleway", sans-serif',
		fontSize: "11.5px",
		marginBottom: 3,
	},
};
