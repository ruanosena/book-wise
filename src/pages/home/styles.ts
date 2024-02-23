import { styled } from "@/stitches.config";
import Link from "next/link";

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

export const LastReadingHeading = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	whiteSpace: "nowrap",
	fontSize: "$sm",
});

export const LastReadingLink = styled(Link, {
	textDecoration: "none",
	fontWeight: "$bold",
	fontSize: "$sm",
	whiteSpace: "nowrap",
	display: "flex",
	alignItems: "center",
	gap: "$3",
	color: "$purple100",
});

export const Aside = styled("aside", {
	display: "flex",
	flexDirection: "column",
	gap: "$4",
});

export const AsideHeading = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	whiteSpace: "nowrap",
	marginTop: "3rem",
	fontSize: "$sm",
});

export const Content = styled("div", {
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

export const Posts = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$3",
});

export const PostCard = styled("article", {
	backgroundColor: "$gray700",
	display: "flex",
	flexDirection: "column",
	gap: "$8",
	padding: "$6",
	borderRadius: "$md",
});

export const FeaturedCard = styled("article", {
	backgroundColor: "$gray600",
	display: "flex",
	flexDirection: "row",
	gap: "$8",
	padding: "$6",
	borderRadius: "$md",
});

export const FeaturedContent = styled("div", {
	display: "flex",
	flexDirection: "column",
});

export const FeaturedImage = styled("img", {
	borderRadius: "$sm",
	width: 108,
	height: "auto",
});

export const FeaturedHeader = styled("header", {
	display: "flex",
	flexDirection: "column",
	gap: "$3",
});

export const FeaturedInfo = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "baseline",
});

export const PostHeader = styled("header", {
	display: "flex",
	alignItems: "flex-start",
	justifyContent: "space-between",
});

export const UserInfo = styled("div", {
	display: "flex",
	gap: "$4",
});

export const Avatar = styled("img", {
	borderRadius: "$full",
	border: "1px solid $green100",
});

export const UserName = styled("h3", {
	fontWeight: "$regular",
	fontSize: "$md",
});

export const RelativeDate = styled("span", {
	color: "$gray400",
	fontSize: "$sm",
});

export const PostBody = styled("div", {
	display: "flex",
	alignItems: "flex-start",
	gap: "$5",
});

export const PostImage = styled("img", {
	borderRadius: "$sm",
	width: 108,
	height: "auto",
});

export const PostContent = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "$5",
});

export const BookTitle = styled("h4", {
	fontWeight: "$bold",
	fontSize: "$md",
	lineHeight: "$short",
});

export const BookAuthor = styled("span", {
	fontWeight: "$regular",
	color: "$gray400",
	fontSize: "$sm",
});

export const BookSynopsis = styled("p", {
	color: "$gray300",
	fontSize: "$sm",
});

export const PopularLink = styled(Link, {
	textDecoration: "none",
	fontWeight: "$bold",
	fontSize: "$sm",
	whiteSpace: "nowrap",
	display: "flex",
	alignItems: "center",
	gap: "$3",
	color: "$purple100",
});

export const PopularCard = styled("article", {
	backgroundColor: "$gray700",
	display: "flex",
	gap: "$5",
	padding: "$4 $5",
	borderRadius: "$md",
	width: 324,
});

export const PopularImage = styled("img", {
	borderRadius: "$sm",
	width: 64,
	height: "auto",
});

export const PopularContent = styled("div", {
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
});
