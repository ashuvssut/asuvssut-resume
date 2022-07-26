import colors from "scss/_colors.module.scss";
import { IStyleSheet } from "types/IStyleSheet";

export const stylesheet: IStyleSheet = {
	section: {
		marginBottom: 15,
	},
	title: {
		fontFamily: '"Raleway", sans-serif',
		fontWeight: 400,
		color: colors.grey,
		marginTop: 15,
		marginBottom: 6,
		textTransform: "uppercase",
	},
};
