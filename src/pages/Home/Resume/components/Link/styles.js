import colors from "scss/_colors.module.scss";

export const stylesheet = {
	root: {
		color: colors.grey52,
		fontWeight: 400,
		fontSize: "13px",
		lineHeight: 1.3,
	},
	a: {
		color: "inherit",
		fontWeight: "inherit",
		fontFamily: '"Lato", sans-serif',
		cursor: "pointer",
	},
	socialA: {
		color: "inherit",
		fontWeight: "inherit",
		fontFamily: '"Lato", sans-serif',
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
		verticalAlign: "bottom"
	},
};
