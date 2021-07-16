import colors from "scss/_colors.module.scss";

export const stylesheet = {
	header: {
		height: "125px",
		textAlign: "center",
		paddingTop: "25px",
	},
	firstName: {
		fontSize: "46px",
		margin: "0",
		fontWeight: 100,
		color: colors.grey52,
		lineHeight: 1.1,
	},
	lastName: { fontWeight: 300 },
	line: {
		fontFamily: '"Raleway", sans-serif',
		fontWeight: 600,
		fontSize: "14px",
		color: colors.grey,
		textShadow: "0 0 1px rgba(0, 0, 0, 0.15)",
	},

	main: {
		display: "flex",
		padding: 35,
		paddingTop: 8,
	},
	firstCol: {
		minWidth: 290,
		maxWidth: 290,
		paddingRight: 17,
	},
	card: {
		marginBottom: 10,
	},
	spot: {
		fontWeight: 600,
	},
};
