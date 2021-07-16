import colors from "scss/_colors.module.scss";

export const stylesheet = {
	list: {
		fontVariant: "common-ligatures",
		marginLeft: 21,
		position: "relative",
		marginBottom: 3,
		color: colors.grey,
	},
	li: {
		color: colors.grey52,
		fontWeight: 400,
		fontSize: 13,
		lineHeight: 1.3,
		position: "relative",
		listStyle: "none",
	},
	liPara: {},
	bullet1: {
		color: colors.lightGrey,
		display: "block",
		position: "absolute",
		top: -13,
		left: -15,
		fontSize: 33,
	},
	bullet2: {
		color: colors.lightGrey,
		display: "block",
		position: "absolute",
		bottom: 0,
		left: -16,
		fontSize: 12,
	},
};
