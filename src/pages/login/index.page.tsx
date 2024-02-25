import { Book, GithubLogo, GoogleLogo, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import {
	Aside,
	AsideCover,
	Container,
	Logo,
	SubTitle,
	Title,
	LoginContainer,
	Options,
	Button,
} from "./styles";
import { signIn } from "next-auth/react";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth].api";

export default function Login() {
	return (
		<Container>
			<Aside>
				<Logo>
					<Book size={48} />
					BookWise
				</Logo>
				<AsideCover />
			</Aside>
			<LoginContainer>
				<div>
					<Title>Boas-vindas!</Title>
					<SubTitle>Faça seu login ou acesse como visitante.</SubTitle>
				</div>
				<Options>
					<Button onClick={() => signIn("google")}>
						<GoogleLogo size={32} /> Google
					</Button>
					<Button onClick={() => signIn("github")}>
						<GithubLogo size={32} /> GitHub
					</Button>
					<Button>
						<RocketLaunch size={32} />
						Acessar como visitante
					</Button>
				</Options>
			</LoginContainer>
		</Container>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const session = await getServerSession(req, res, authOptions);

	if (session?.user) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};
