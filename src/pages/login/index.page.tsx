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
					<Button>
						<GoogleLogo size={32} /> Google
					</Button>
					<Button>
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
