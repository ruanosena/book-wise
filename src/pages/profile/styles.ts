import { styled } from "@/stitches.config";

export const Container = styled("div", {
	padding: "$5",
	display: "flex",
	gap: "4rem",
});

export const Main = styled("main", {
	padding: "3rem 2rem",
	flex: 1,
	display: "flex",
	gap: "4rem",
});

export const Content = styled("div", {
	flex: 1,
	display: "flex",
	flexDirection: "column",
	gap: "$4",

	"> span": {
		fontSize: "$sm",
	},
});

export const Heading = styled("h2", {
	fontSize: "$2xl",
	display: "flex",
	alignItems: "center",
	gap: "$3",

	svg: {
		color: "$green100",
	},
});

export const SearchForm = styled("form", {
	display: "flex",
	border: "1px solid $gray500",
	borderRadius: "$sm",
	alignItems: "flex-end",
	overflow: "hidden",
	margin: "$10 0 $8",

	svg: {
		color: "$gray500",
	},
});

export const Input = styled("input", {
	width: "100%",
	height: 48,
	padding: "$3 $5",
	border: 0,
	color: "inherit",
	backgroundColor: "$gray800",

	"&::placeholder": {
		color: "$gray400",
	},
});

export const SearchButton = styled("button", {
	all: "unset",
	cursor: "pointer",
	padding: "$2",
});

export const BookCard = styled("article", {
	padding: "$6",
	borderRadius: "$md",
	backgroundColor: "$gray700",
	display: "flex",
	flexDirection: "column",
	gap: "$6",
});

export const BookCardHeader = styled("header", {
	display: "flex",
	gap: "$6",
});

export const BookImage = styled("img", {
	borderRadius: "$sm",
	width: 98,
	height: "auto",
});

export const BookDetails = styled("div", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
});

export const BookTitle = styled("h4", {
	fontWeight: "$bold",
	fontSize: "$lg",
	lineHeight: "$short",
});

export const BookAuthor = styled("span", {
	fontWeight: "$regular",
	color: "$gray400",
	fontSize: "$sm",
});

export const BookOpinion = styled("p", {
	color: "$gray300",
	fontSize: "$sm",
});

export const Aside = styled("aside", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	width: 308,
	gap: "$4",
	borderLeft: "1px solid $gray700",
});

export const AsideHeader = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	paddingBottom: "$2",
	gap: "$5",
});

export const Avatar = styled("img", {
	borderRadius: "$full",
	border: "1px solid $green100",
	width: 72,
	height: 72,
});

export const UserInfo = styled("div", {
	fontSize: "$xl",
	fontWeight: "$bold",

	span: {
		fontWeight: "$regular",
		display: "block",
		textAlign: "center",
		color: "$gray400",
		fontSize: "$sm",
	},
});

export const Hr = styled("div", {
	width: 32,
	height: 4,
	backgroundImage: "$gradient-horizontal",
	borderRadius: "$full",
});

export const Analytics = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$10",
	padding: "$5 3.5rem",
});

export const AnalyticsItem = styled("span", {
	display: "inline-flex",
	gap: "$5",
	alignItems: "center",

	div: {
		fontSize: "$md",
		fontWeight: "$bold",
		color: "$gray200",
		lineHeight: "$short",
	},

	span: {
		display: "block",
		fontSize: "$sm",
		fontWeight: "$regular",
		color: "$gray300",
	},

	svg: {
		color: "$green100",
	},
});
