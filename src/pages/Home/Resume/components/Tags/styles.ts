import colors from "scss/_colors.module.scss";
import { IStyleSheet } from "types/IStyleSheet";

export const stylesheet: IStyleSheet = {
	tagsWrap: {
		display: "flex",
		flexWrap: "wrap",
		gap: 3,
		marginBottom: 6,
	},
	tag: {
		backgroundColor: colors.lightGrey,
		color: colors.white,
		fontSize: "13px",
		padding: "2px 8px",
		borderRadius: "6px",
	},
};
