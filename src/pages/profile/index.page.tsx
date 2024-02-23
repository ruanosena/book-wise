import { Sidebar } from "@/components/Sidebar";
import {
	Container,
	Content,
	Heading,
	Input,
	SearchForm,
	Main,
	SearchButton,
	Aside,
	AsideHeader,
	Avatar,
	UserInfo,
	Hr,
	Analytics,
	AnalyticsItem,
	BookCard,
	BookCardHeader,
	BookImage,
	BookDetails,
	BookTitle,
	BookAuthor,
	BookOpinion,
} from "./styles";
import {
	BookOpen,
	BookmarkSimple,
	Books,
	MagnifyingGlass,
	User,
	UserList,
} from "@phosphor-icons/react/dist/ssr";
import { StarRating } from "@/components/StarRating";

export default function Profile() {
	return (
		<Container>
			<Sidebar />
			<Main>
				<Content>
					<Heading>
						<User size={32} />
						Perfil
					</Heading>
					<SearchForm>
						<Input placeholder="Buscar livro avaliado" />
						<SearchButton type="button">
							<MagnifyingGlass size={20} />
						</SearchButton>
					</SearchForm>
					<span>Hoje</span>
					<BookCard>
						<BookCardHeader>
							<BookImage src="/images/books/fragmentos-do-horror.png" />
							<BookDetails>
								<div>
									<BookTitle>Fragmentos do Horror</BookTitle>
									<BookAuthor>Junji Ito</BookAuthor>
								</div>
								<StarRating />
							</BookDetails>
						</BookCardHeader>
						<BookOpinion>
							Ornare amet scelerisque eget sit in donec dui. Tempus eget porttitor hendrerit eros
							viverra. Sit eget ipsum purus morbi curabitur cras gravida adipiscing dictum. Dui duis
							ut auctor dolor et mattis ultrices. Convallis quis in tortor pretium hendrerit sed.
							Vel et nibh sodales blandit egestas a quis bibendum.
						</BookOpinion>
					</BookCard>

					<span>Há 3 dias</span>
					<BookCard>
						<BookCardHeader>
							<BookImage src="/images/books/historias-extraordinarias.png" />
							<BookDetails>
								<div>
									<BookTitle>Histórias extraordinárias</BookTitle>
									<BookAuthor>Edgar Allan Poe</BookAuthor>
								</div>
								<StarRating />
							</BookDetails>
						</BookCardHeader>
						<BookOpinion>
							Nunc iaculis adipiscing ut sem a ut risus vel facilisi. Posuere pharetra sollicitudin
							sem velit sodales. Diam semper arcu nulla quis sapien nibh. Ut eget orci ipsum sed
							quis cras morbi placerat. Nec non at arcu adipiscing. Aenean cras ultrices cursus
							congue. Diam quis est proin id facilisi. Ac cras iaculis quam lectus eros orci semper
							fames amet. Id consequat purus faucibus pulvinar nisl molestie semper.
						</BookOpinion>
					</BookCard>

					<span>Há 1 mês</span>
					<BookCard>
						<BookCardHeader>
							<BookImage src="/images/books/viagem-ao-centro-da-terra.png" />
							<BookDetails>
								<div>
									<BookTitle>Viagem ao Centro da Terra</BookTitle>
									<BookAuthor>Julio Verne</BookAuthor>
								</div>
								<StarRating />
							</BookDetails>
						</BookCardHeader>
						<BookOpinion>
							Facilisis massa turpis morbi et. Aliquet arcu tellus id erat a lobortis et
							consectetur. Sit sit urna turpis vulputate. Morbi et leo in elit vitae bibendum
							scelerisque congue. Eget neque elementum non consequat lacus metus. Amet enim rhoncus
							neque proin purus nisl eget diam tellus. Id pellentesque nibh pellentesque pharetra
							viverra donec diam.
						</BookOpinion>
					</BookCard>
				</Content>
				<Aside>
					<AsideHeader>
						<Avatar src="https://github.com/ruanosena.png" alt="avatar" />
						<UserInfo>
							Cristofer Rosser
							<span>Membro desde 2019</span>
						</UserInfo>
					</AsideHeader>
					<Hr />
					<Analytics>
						<AnalyticsItem>
							<BookOpen size={32} />
							<div>
								853
								<span>Páginas lidas</span>
							</div>
						</AnalyticsItem>
						<AnalyticsItem>
							<Books size={32} />
							<div>
								3<span>Livros avaliados</span>
							</div>
						</AnalyticsItem>
						<AnalyticsItem>
							<UserList size={32} />
							<div>
								3<span>Autores lidos</span>
							</div>
						</AnalyticsItem>
						<AnalyticsItem>
							<BookmarkSimple size={32} />
							<div>
								Horror
								<span>Categoria mais lida</span>
							</div>
						</AnalyticsItem>
					</Analytics>
				</Aside>
			</Main>
		</Container>
	);
}
