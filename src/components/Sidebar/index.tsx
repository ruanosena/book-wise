import { Binoculars, Book, ChartLineUp, SignIn, User } from "@phosphor-icons/react/dist/ssr";
import { Container, ButtonFooterLink, Logo, Nav, NavItem } from "./styles";
import { useRouter } from "next/router";

export function Sidebar() {
	const router = useRouter();

	const activePathname = router.pathname;

	return (
		<Container>
			<Logo>
				<Book size={24} />
				BookWise
			</Logo>
			<Nav>
				<NavItem
					active={activePathname === "/" || activePathname === "/home" ? "true" : "false"}
					href="/"
				>
					<ChartLineUp size={24} />
					Início
				</NavItem>
				<NavItem href="/explore" active={activePathname === "/explore" ? "true" : "false"}>
					<Binoculars size={24} />
					Explorar
				</NavItem>

				<NavItem href="/profile" active={activePathname === "/profile" ? "true" : "false"}>
					<User size={24} />
					Perfil
				</NavItem>
			</Nav>
			<ButtonFooterLink href="/login">
				Fazer login
				<SignIn size={24} />
			</ButtonFooterLink>
		</Container>
	);
}
