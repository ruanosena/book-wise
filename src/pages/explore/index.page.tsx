import { Sidebar } from "@/components/Sidebar";
import {
	Avaliation,
	AvaliationAvatar,
	AvaliationComment,
	AvaliationHeader,
	AvaliationUser,
	AvaliationsButton,
	AvaliationsHeading,
	BookAbout,
	BookAuthor,
	BookCard,
	BookCardContent,
	BookCardInfo,
	BookDetails,
	BookImage,
	BookTitle,
	Books,
	Categories,
	Container,
	Content,
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerOverlay,
	Heading,
	Input,
	Main,
	PageTitle,
	SearchButton,
	SearchForm,
	Modal,
	ModalOverlay,
	ModalTitle,
	ModalOptions,
	ModalButton,
	CommentFormContainer,
	CommentFormInput,
	CommentFormActions,
	CommentFormButton,
} from "./styles";
import {
	Binoculars,
	MagnifyingGlass,
	X,
	BookmarkSimple,
	BookOpen,
	GoogleLogo,
	GithubLogo,
	Check,
} from "@phosphor-icons/react/dist/ssr";
import { Tag } from "@/components/Tag";
import { useEffect, useState } from "react";
import { StarRating } from "@/components/StarRating";

const CategoriesTags = [
	"Tudo",
	"Computação",
	"Educação",
	"Fantasia",
	"Ficção científica",
	"Horror",
	"HQs",
	"Suspense",
];

export default function Explore() {
	const [selectedBook, setSelectedBook] = useState<number | null>(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isFormShown, setIsFormShown] = useState(false);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	function handleToggleDrawer() {
		setIsDrawerOpen((state) => !state);
	}

	function handleToggleModal() {
		setIsModalOpen((state) => !state);
	}

	function handleSelectCategory(tag: string) {
		setSelectedCategories((state) => {
			if (tag === "Tudo") {
				return ["Tudo"];
			} else if (state.includes("Tudo")) {
				state = state.filter((category) => category !== "Tudo");
			}

			if (state.includes(tag) && state.length === 1) {
				return state;
			}
			const categories = state.includes(tag)
				? state.filter((category) => category !== tag)
				: [...state, tag];

			return categories;
		});
	}

	function handleToggleCommentForm() {
		handleToggleModal();
		setIsFormShown((state) => !state);
	}

	function handleSelectBook(bookId: number) {
		setSelectedBook(bookId);
	}

	useEffect(() => {
		if (selectedBook !== null) {
			handleToggleDrawer();
		}
	}, [selectedBook]);

	return (
		<Container>
			<Sidebar />
			<Main>
				<Content>
					<Heading>
						<PageTitle>
							<Binoculars size={32} />
							Explorar
						</PageTitle>
						<SearchForm>
							<Input placeholder="Buscar livro ou autor" />
							<SearchButton type="button">
								<MagnifyingGlass size={20} />
							</SearchButton>
						</SearchForm>
					</Heading>

					<Categories>
						{CategoriesTags.map((tag) => (
							<Tag
								key={tag}
								onSelect={() => handleSelectCategory(tag)}
								isSelected={selectedCategories.includes(tag)}
							>
								{tag}
							</Tag>
						))}
					</Categories>

					<Books>
						<BookCard onClick={() => handleSelectBook(9)}>
							<BookCardContent>
								<BookImage src="/images/books/fragmentos-do-horror.png" />
								<BookDetails>
									<div>
										<BookTitle>Fragmentos do Horror</BookTitle>
										<BookAuthor>Junji Ito</BookAuthor>
									</div>
									<StarRating />
								</BookDetails>
							</BookCardContent>
						</BookCard>

						<BookCard onClick={() => handleSelectBook(8)}>
							<BookCardContent>
								<BookImage src="/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png" />
								<BookDetails>
									<div>
										<BookTitle>14 Habitos de Desenvolvedores Altamente Produtivos</BookTitle>
										<BookAuthor>Zeno Rocha</BookAuthor>
									</div>
									<StarRating />
								</BookDetails>
							</BookCardContent>
						</BookCard>

						<BookCard onClick={() => handleSelectBook(7)}>
							<BookCardContent>
								<BookImage src="/images/books/o-fim-da-eternidade.png" />
								<BookDetails>
									<div>
										<BookTitle>O Fim da eternidade</BookTitle>
										<BookAuthor>Isaac Asimov</BookAuthor>
									</div>
									<StarRating />
								</BookDetails>
							</BookCardContent>
						</BookCard>
						<BookCard onClick={() => handleSelectBook(6)}>
							<BookCardContent>
								<BookImage src="/images/books/fragmentos-do-horror.png" />
								<BookDetails>
									<div>
										<BookTitle>Fragmentos do Horror</BookTitle>
										<BookAuthor>Junji Ito</BookAuthor>
									</div>
									<StarRating />
								</BookDetails>
							</BookCardContent>
						</BookCard>

						<BookCard onClick={() => handleSelectBook(5)}>
							<BookCardContent>
								<BookImage src="/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png" />
								<BookDetails>
									<div>
										<BookTitle>14 Habitos de Desenvolvedores Altamente Produtivos</BookTitle>
										<BookAuthor>Zeno Rocha</BookAuthor>
									</div>
									<StarRating />
								</BookDetails>
							</BookCardContent>
						</BookCard>

						<BookCard onClick={() => handleSelectBook(4)}>
							<BookCardContent>
								<BookImage src="/images/books/o-fim-da-eternidade.png" />
								<BookDetails>
									<div>
										<BookTitle>O Fim da eternidade</BookTitle>
										<BookAuthor>Isaac Asimov</BookAuthor>
									</div>
									<StarRating />
								</BookDetails>
							</BookCardContent>
						</BookCard>
						<BookCard onClick={() => handleSelectBook(3)}>
							<BookCardContent>
								<BookImage src="/images/books/fragmentos-do-horror.png" />
								<BookDetails>
									<div>
										<BookTitle>Fragmentos do Horror</BookTitle>
										<BookAuthor>Junji Ito</BookAuthor>
									</div>
									<StarRating />
								</BookDetails>
							</BookCardContent>
						</BookCard>

						<BookCard onClick={() => handleSelectBook(2)}>
							<BookCardContent>
								<BookImage src="/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png" />
								<BookDetails>
									<div>
										<BookTitle>14 Habitos de Desenvolvedores Altamente Produtivos</BookTitle>
										<BookAuthor>Zeno Rocha</BookAuthor>
									</div>
									<StarRating />
								</BookDetails>
							</BookCardContent>
						</BookCard>

						<BookCard onClick={() => handleSelectBook(1)}>
							<BookCardContent>
								<BookImage src="/images/books/o-fim-da-eternidade.png" />
								<BookDetails>
									<div>
										<BookTitle>O Fim da eternidade</BookTitle>
										<BookAuthor>Isaac Asimov</BookAuthor>
									</div>
									<StarRating />
								</BookDetails>
							</BookCardContent>
						</BookCard>
					</Books>
				</Content>

				<Drawer state={isDrawerOpen ? "open" : "closed"}>
					<DrawerClose onClick={handleToggleDrawer}>
						<X size={24} />
					</DrawerClose>

					<DrawerContent>
						<BookCard>
							<BookCardContent>
								<BookImage src="/images/books/o-fim-da-eternidade.png" />
								<BookDetails>
									<div>
										<BookTitle>O Fim da eternidade</BookTitle>
										<BookAuthor>Isaac Asimov</BookAuthor>
									</div>
									<div>
										<StarRating />
										<span>3 avaliações</span>
									</div>
								</BookDetails>
							</BookCardContent>
							<BookCardInfo>
								<BookAbout>
									<BookmarkSimple size={24} />
									<div>
										<span>Categoria</span>
										Computação, educação
									</div>
								</BookAbout>
								<BookAbout>
									<BookOpen size={24} />
									<div>
										<span>Páginas</span>
										160
									</div>
								</BookAbout>
							</BookCardInfo>
						</BookCard>
						<AvaliationsHeading>
							<span>Avaliações</span>
							{!isFormShown && (
								<AvaliationsButton onClick={handleToggleCommentForm}>Avaliar</AvaliationsButton>
							)}
						</AvaliationsHeading>
						{isFormShown && (
							<CommentFormContainer>
								<AvaliationHeader>
									<AvaliationUser>
										<AvaliationAvatar src="https://github.com/ruanosena.png" alt="avatar" />
										<div>Cristofer Rosser</div>
									</AvaliationUser>
									<StarRating />
								</AvaliationHeader>
								<CommentFormInput placeholder="Escreva sua avaliação" />
								<CommentFormActions>
									<CommentFormButton>
										<X size={24} />
									</CommentFormButton>
									<CommentFormButton>
										<Check size={24} />
									</CommentFormButton>
								</CommentFormActions>
							</CommentFormContainer>
						)}
						<Avaliation avaliationOf="mine">
							<AvaliationHeader>
								<AvaliationUser>
									<AvaliationAvatar src="https://github.com/ruanosena.png" alt="avatar" />
									<div>
										Cristofer Rosser
										<span>Hoje</span>
									</div>
								</AvaliationUser>
								<StarRating staticStatus stars={5} />
							</AvaliationHeader>
							<AvaliationComment>
								Tortor sed elementum dolor sed nunc elementum enim viverra. Massa tempus ac a
								adipiscing at cursus senectus dui libero. Elementum lacus enim viverra arcu at ut
								amet convallis. Maecenas ac fringilla blandit risus nibh praesent sagittis dapibus
								netus. Dignissim sed congue sed vel faucibus purus dapibus pellentesque.
							</AvaliationComment>
						</Avaliation>
						<Avaliation>
							<AvaliationHeader>
								<AvaliationUser>
									<AvaliationAvatar src="https://github.com/ruanosena.png" alt="avatar" />
									<div>
										Brandon Botosh
										<span>Há 2 dias</span>
									</div>
								</AvaliationUser>
								<StarRating staticStatus stars={4} />
							</AvaliationHeader>
							<AvaliationComment>
								Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id
								vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit
								vulputate eget
							</AvaliationComment>
						</Avaliation>

						<Avaliation>
							<AvaliationHeader>
								<AvaliationUser>
									<AvaliationAvatar src="https://github.com/ruanosena.png" alt="avatar" />
									<div>
										Jaylon Franci
										<span>Há 4 meses</span>
									</div>
								</AvaliationUser>
								<StarRating staticStatus stars={4} />
							</AvaliationHeader>
							<AvaliationComment>Nec tempor nunc in egestas.</AvaliationComment>
						</Avaliation>

						<Avaliation>
							<AvaliationHeader>
								<AvaliationUser>
									<AvaliationAvatar src="https://github.com/ruanosena.png" alt="avatar" />
									<div>
										James Botosh
										<span>Há 4 meses</span>
									</div>
								</AvaliationUser>
								<StarRating staticStatus stars={4} />
							</AvaliationHeader>
							<AvaliationComment>
								Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id
								vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit
								vulputate eget
							</AvaliationComment>
						</Avaliation>
					</DrawerContent>
				</Drawer>
				{isDrawerOpen && <DrawerOverlay onClick={handleToggleDrawer} />}
				<Modal state={isModalOpen ? "open" : "closed"}>
					<ModalTitle>Faça login para deixar sua avaliação</ModalTitle>
					<ModalOptions>
						<ModalButton>
							<GoogleLogo size={32} /> Google
						</ModalButton>
						<ModalButton>
							<GithubLogo size={32} /> GitHub
						</ModalButton>
					</ModalOptions>
				</Modal>
				{isModalOpen && <ModalOverlay onClick={handleToggleModal} />}
			</Main>
		</Container>
	);
}
