import { styled } from "@/stitches.config";

export const Container = styled("div", {
	display: "flex",
	minHeight: "100vh",
	width: "100%",
	padding: "$5",

	"@media(max-width: 680px)": {
		flexDirection: "column",
	},
});

export const Aside = styled("div", {
	borderRadius: "$md",
	position: "relative",
	minWidth: "40%",
	overflow: "hidden",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundImage: "url(/Image.png)",
	backgroundSize: "cover",
});

export const AsideCover = styled("div", {
	backgroundColor: "$purple200",
	opacity: 0.6,
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	zIndex: 1,
});

export const Logo = styled("span", {
	display: "flex",
	alignItems: "center",
	gap: "$3",
	color: "$purple100",
	lineHeight: "$base",
	fontWeight: "$bold",
	fontSize: "2.25rem",
	backgroundImage: "$gradient-horizontal",
	"-webkit-background-clip": "text",
	"-moz-background-clip": "text",
	"-webkit-text-fill-color": "transparent",
	"-moz-text-fill-color": "transparent",
	zIndex: 2,
});

export const LoginContainer = styled("div", {
	flex: 1,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	gap: "$10",
});

export const Title = styled("h2", {
	fontSize: "$lg",
});

export const SubTitle = styled("span", {
	fontSize: "$md",
	color: "$gray200",
});

export const Options = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$4",
	maxWidth: 372,
});

export const Button = styled("button", {
	all: "unset",
	borderRadius: "$sm",
	backgroundColor: "$gray600",
	display: "flex",
	alignItems: "center",
	padding: "$4 $5",
	fontSize: "$lg",
	fontWeight: "$medium",
	gap: "$4",
	cursor: "pointer",
	userSelect: "none",

	"&:not(:disabled):hover": {
		backgroundColor: "$gray500",
		transition: "0.2s all",
	},

	"&:disabled": {
		backgroundColor: "$gray700",
		cursor: "default",
	},
});
