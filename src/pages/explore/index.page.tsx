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
import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prisma";

interface Book {
	id: string;
	name: string;
	author: string;
	categories: {
		book_id: string;
		categoryId: string;
	}[];
	summary: string;
	cover_url: string;
	total_pages: number;
	created_at: string;
}

interface Category {
	id: string;
	name: string;
}

interface ExploreProps {
	books: Book[];
	categories: Category[];
}

export default function Explore({ books, categories }: ExploreProps) {
	const [selectedBook, setSelectedBook] = useState<string | null>(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isFormShown, setIsFormShown] = useState(false);
	const [shownBooks, setShownBooks] = useState<Book[]>(books);
	const [selectedCategories, setSelectedCategories] = useState<Category[]>(categories);

	function handleToggleDrawer() {
		setIsDrawerOpen((state) => !state);
	}

	function handleToggleModal() {
		setIsModalOpen((state) => !state);
	}

	function handleSelectCategory(category: Category) {
		setSelectedCategories((state) => {
			if (state.length === 1 && state[0].id === category.id) {
				return state;
			}
			const categories = state.some(({ id }) => id === category.id)
				? state.filter(({ id }) => id !== category.id)
				: [...state, category];

			return categories;
		});
	}

	useEffect(() => {
		setShownBooks(() =>
			books.filter((book) =>
				book.categories.some((category) =>
					selectedCategories.some((selected) => selected.id === category.categoryId)
				)
			)
		);
	}, [selectedCategories, books]);

	function handleToggleCommentForm() {
		handleToggleModal();
		setIsFormShown((state) => !state);
	}

	function handleSelectBook(bookId: string) {
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
						{categories.map((category) => (
							<Tag
								key={category.id}
								onSelect={() => handleSelectCategory(category)}
								isSelected={selectedCategories.some(({ id }) => id === category.id)}
							>
								{category.name}
							</Tag>
						))}
					</Categories>

					<Books>
						{shownBooks.map((book) => (
							<BookCard key={book.id} onClick={() => handleSelectBook(book.id)}>
								<BookCardContent>
									<BookImage src={book.cover_url} />
									<BookDetails>
										<div>
											<BookTitle>{book.name}</BookTitle>
											<BookAuthor>{book.author}</BookAuthor>
										</div>
										<StarRating />
									</BookDetails>
								</BookCardContent>
							</BookCard>
						))}
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
	const books = await prisma.book.findMany({
		include: { categories: true },
	});
	const categories = await prisma.category.findMany();

	return {
		props: {
			books: books.map((book) => ({ ...book, created_at: book.created_at.toISOString() })),
			categories,
		},
	};
};
