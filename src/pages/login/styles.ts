import { styled } from "@/stitches.config";

export const Title = styled("h1", {
	fontSize: "$sm",
	variants: {
		size: {
			sm: {
				fontSize: "$sm",
			},
			md: {
				fontSize: "$md",
			},
			lg: {
				fontSize: "$lg",
			},
		},
	},
});
