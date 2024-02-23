import { globalCss } from "@/stitches.config";

export const globalStyles = globalCss({
	"*": {
		boxSizing: "border-box",
		padding: 0,
		margin: 0,
	},

	":focus": {
		outline: "transparent",
		boxShadow: "0 0 0 2px $colors$green200",
	},

	body: {
		backgroundColor: "$gray800",
		color: "$gray100",
		"-webkit-font-smoothing": "antialiased",
		"-moz-osx-font-smoothing": "grayscale",
		lineHeight: "$base",
	},
});
