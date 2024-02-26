import {
	Binoculars,
	Book,
	ChartLineUp,
	SignIn,
	SignOut,
	User,
} from "@phosphor-icons/react/dist/ssr";
import { Container, ButtonFooterLink, Logo, Nav, NavItem, Avatar } from "./styles";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

export function Sidebar() {
	const router = useRouter();
	const session = useSession();

	const activePathname = router.pathname;

	function handleLogout() {
		signOut();
	}

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

				{session.data?.user && (
					<NavItem href="/profile" active={activePathname === "/profile" ? "true" : "false"}>
						<User size={24} />
						Perfil
					</NavItem>
				)}
			</Nav>
			{!session.data?.user ? (
				<ButtonFooterLink variant="login" href="/login">
					Fazer login
					<SignIn size={20} />
				</ButtonFooterLink>
			) : (
				<ButtonFooterLink variant="logout" onClick={handleLogout} href="/">
					{<Avatar src={session.data.user.avatar_url} alt="" />}
					{session.data.user.name}
					<SignOut size={20} />
				</ButtonFooterLink>
			)}
		</Container>
	);
}
