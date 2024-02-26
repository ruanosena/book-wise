import { styled } from "@/stitches.config";
import { X } from "@phosphor-icons/react/dist/ssr";

export const Container = styled("div", {
	position: "relative",
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
	display: "flex",
	flex: 1,
	flexDirection: "column",
	gap: "$4",

	"> span": {
		fontSize: "$sm",
	},
});

export const Heading = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
});

export const PageTitle = styled("h2", {
	fontSize: "$2xl",
	display: "flex",
	alignItems: "center",

	svg: {
		color: "$green100",
	},
	gap: "$3",
});

export const SearchForm = styled("form", {
	display: "flex",
	border: "1px solid $gray500",
	borderRadius: "$sm",
	alignItems: "flex-end",
	overflow: "hidden",
	width: 433,

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

export const Categories = styled("div", {
	display: "flex",
	flexFlow: "row wrap",
	gap: "$3",
	margin: "$10 0 3rem",
});

export const Books = styled("div", {
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gap: "$5",
});

export const BookCard = styled("article", {
	padding: "$6",
	borderRadius: "$md",
	backgroundColor: "$gray700",
	display: "flex",
	flexDirection: "column",
	gap: "$6",
});

export const BookCardContent = styled("header", {
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

	span: {
		fontWeight: "$regular",
		color: "$gray400",
		fontSize: "$sm",
	},
});

export const BookTitle = styled("h4", {
	display: "-webkit-box",
	fontWeight: "$bold",
	fontSize: "$lg",
	lineHeight: "$short",
	"-webkit-line-clamp": 2,
	"-webkit-box-orient": "vertical",
	overflow: "hidden",
	textOverflow: "ellipsis",
});

export const BookAuthor = styled("div", {
	fontWeight: "$regular",
	color: "$gray300",
	fontSize: "$md",
});

export const BookCardInfo = styled("div", {
	marginTop: "$10",
	borderTop: "1px solid $gray600",
	display: "flex",
	justifyContent: "space-between",
	padding: "$6 0",
});

export const BookAbout = styled("div", {
	display: "flex",
	alignItems: "center",
	gap: "$4",
	flex: 1,

	div: {
		color: "$gray200",
		lineHeight: "$short",
		fontWeight: "$bold",
		fontSize: "$md",
	},

	span: {
		display: "block",
		fontWeight: "$regular",
		color: "$gray300",
		fontSize: "$sm",
	},

	svg: {
		color: "$green100",
	},
});

export const Drawer = styled("aside", {
	position: "absolute",
	top: 0,
	bottom: 0,
	right: 0,
	padding: "3rem",
	maxWidth: 660,
	width: "100%",
	backgroundColor: "$gray800",
	zIndex: 1,

	variants: {
		state: {
			open: {
				display: "flex",
				flexDirection: "column",
			},
			closed: {
				display: "none",
			},
		},
	},
});

export const DrawerOverlay = styled("div", {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(0, 0, 0, 0.6)",
});

export const DrawerClose = styled("button", {
	position: "absolute",
	top: "$7",
	right: "$10",
	border: 0,
	alignSelf: "flex-end",
	lineHeight: 0,
	fontSize: "$xl",
	background: "transparent",
	color: "$gray300",
	cursor: "pointer",
});

export const DrawerContent = styled("div", {
	margin: "$4",
	padding: "$3 0",
});

export const AvaliationsHeading = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	whiteSpace: "nowrap",
	marginTop: "$10",
	fontSize: "$sm",
});

export const AvaliationsButton = styled(SearchButton, {
	fontWeight: "$bold",
	fontSize: "$md",
	color: "$purple100",
});

export const Avaliation = styled("article", {
	display: "flex",
	flexDirection: "column",
	padding: "$6",
	gap: "$5",
	backgroundColor: "$gray700",
	borderRadius: "$md",

	"& + &": {
		marginTop: "$3",
	},

	variants: {
		avaliationOf: {
			mine: {
				backgroundColor: "$gray600",
			},
		},
	},
});

export const AvaliationHeader = styled("header", {
	display: "flex",
	gap: "$4",
	alignItems: "flex-start",
	width: "100%",
	justifyContent: "space-between",

	span: {
		color: "$gray400",
		fontSize: "$sm",
		display: "block",
	},
});

export const AvaliationUser = styled("div", {
	display: "flex",
	gap: "$4",
	alignItems: "center",
});

export const AvaliationAvatar = styled("img", {
	borderRadius: "$full",
	border: "1px solid $green100",
	width: 40,
	height: 40,
});

export const AvaliationComment = styled("p", {
	color: "$gray300",
	fontSize: "$sm",
});

export const ModalOverlay = styled("div", {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(0, 0, 0, 0.6)",
	zIndex: 10,
});

export const Modal = styled("div", {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translateX(-50%) translateY(-50%)",
	backgroundColor: "$gray700",
	padding: "3.5rem 4.5rem",
	zIndex: 11,
	borderRadius: "$md",

	variants: {
		state: {
			open: {
				display: "block",
			},
			closed: {
				display: "none",
			},
		},
	},
});

export const ModalTitle = styled("div", {
	color: "$gray200",
	fontWeight: "$bold",
	fontSize: "$md",
});

export const ModalOptions = styled("div", {
	marginTop: "$10",
	display: "flex",
	flexDirection: "column",
	gap: "$4",
	maxWidth: 372,
});

export const ModalButton = styled("button", {
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

export const CommentFormContainer = styled("div", {
	display: "flex",
	flexDirection: "column",
	padding: "$6",
	gap: "$6",
	backgroundColor: "$gray700",
	borderRadius: "$md",
	margin: "$4 0 $3",
});

export const CommentFormInput = styled("textarea", {
	height: 164,
	backgroundColor: "$gray800",
	borderRadius: "$sm",
	border: "1px solid $gray500",
	color: "inherit",
	fontSize: "$sm",
	padding: "$3 $5",

	"&::placeholder": {
		color: "$gray400",
	},
});

export const CommentFormActions = styled("div", {
	display: "flex",
	justifyContent: "flex-end",
	gap: "$2",
});

export const CommentFormButton = styled("button", {
	all: "unset",
	borderRadius: "$sm",
	backgroundColor: "$gray600",
	display: "flex",
	alignItems: "center",
	padding: "$2",
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
