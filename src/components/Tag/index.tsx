import { ReactNode, useState } from "react";
import { Container } from "./styles";

interface TagProps {
	children: ReactNode;
	onSelect: () => void;
	isSelected: boolean;
}

export function Tag({ children, onSelect, isSelected }: TagProps) {
	return (
		<Container variant={isSelected ? "filled" : "normal"} onClick={onSelect}>
			{children}
		</Container>
	);
}
