import { styled } from "@/stitches.config";

export const Container = styled("div", {
	padding: "$1 $4",
	color: "$purple100",
	fontSize: "$md",
	fontWeight: "$regular",
	borderRadius: "$full",
	cursor: "pointer",
	borderWidth: "1px",
	borderStyle: "solid",
	variants: {
		variant: {
			filled: {
				background: "$purple200",
				borderColor: "transparent",
			},
			normal: {
				borderColor: "$purple100",
			},
		},
	},
	whiteSpace: "nowrap",
});
