import { styled } from "@/stitches.config";
import Link from "next/link";

export const Container = styled("div", {
	backgroundImage: "linear-gradient(0deg, $green200 0%, $purple200 100%)",
	width: 232,
	borderRadius: "$md",
	height: "calc(100vh - 2.5rem)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "flex-start",
	padding: "$10 0 $7",
});

export const Logo = styled("span", {
	display: "flex",
	alignItems: "center",
	marginBottom: "4rem",
	gap: "$2",
	color: "$purple100",
	lineHeight: "$base",
	fontWeight: "$bold",
	fontSize: "$xl",
	backgroundImage: "$gradient-horizontal",
	"-webkit-background-clip": "text",
	"-moz-background-clip": "text",
	"-webkit-text-fill-color": "transparent",
	"-moz-text-fill-color": "transparent",
});

export const Nav = styled("nav", {
	display: "flex",
	flexDirection: "column",
	gap: "$4",
});

export const NavItem = styled(Link, {
	textDecoration: "none",
	fontWeight: "$bold",
	fontSize: "$md",
	display: "flex",
	alignItems: "center",
	gap: "$3",
	variants: {
		active: {
			true: {
				color: "$white",
				marginLeft: "calc(-$3 - 4px)",

				"&::before": {
					content: "",
					display: "block",
					width: 4,
					height: 24,
					backgroundImage: "$gradient-vertical",
					borderRadius: "$full",
				},
			},
			false: {
				color: "$gray400",

				"&:hover": {
					color: "$white",
				},
			},
		},
	},
	defaultVariants: {
		active: "false",
	},
});

export const ButtonFooterLink = styled(Link, {
	marginTop: "auto",
	textDecoration: "none",
	fontWeight: "$bold",
	fontSize: "$md",
	display: "flex",
	alignItems: "center",
	gap: "$3",
	color: "$gray200",

	svg: {
		color: "$green100",
	},
});
