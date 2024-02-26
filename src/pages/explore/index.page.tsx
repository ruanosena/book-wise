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
import { FormEvent, useEffect, useState } from "react";
import { StarRating } from "@/components/StarRating";
import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prisma";
import { useSession } from "next-auth/react";
import { api } from "@/lib/axios";

interface Book {
	id: string;
	name: string;
	author: string;
	categories: {
		book_id: string;
		categoryId: string;
	}[];
	ratings: ({
		user: {
			id: string;
			name: string;
			email: string;
			avatar_url: string | null;
			created_at: string;
		};
	} & {
		id: string;
		rate: number;
		description: string;
		created_at: string;
		book_id: string;
		user_id: string;
	})[];
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
	const [selectedBook, setSelectedBook] = useState<Book | null>(null);
	const [searchInput, setSearchInput] = useState("");
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isFormShown, setIsFormShown] = useState(false);
	const [shownBooks, setShownBooks] = useState<Book[]>(books);
	const [selectedCategories, setSelectedCategories] = useState<Category[]>(categories);

	const session = useSession();

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
		if (!session.data?.user) {
			handleToggleModal();
		} else {
			setIsFormShown((state) => !state);
		}
	}

	function handleSelectBook(book: Book) {
		setSelectedBook(book);
	}

	async function handleSearch(event: FormEvent) {
		event.preventDefault();
		if (searchInput.trim()) {
			const response = await api.get<{ books: Book[] }>("/search", {
				params: { q: searchInput.trim() },
			});

			setShownBooks(
				response.data.books.filter((book) =>
					book.categories.some((category) =>
						selectedCategories.some((selected) => selected.id === category.categoryId)
					)
				)
			);
		} else {
			setShownBooks(
				books.filter((book) =>
					book.categories.some((category) =>
						selectedCategories.some((selected) => selected.id === category.categoryId)
					)
				)
			);
		}
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
						<SearchForm onSubmit={handleSearch}>
							<Input
								placeholder="Buscar livro ou autor"
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
							/>
							<SearchButton type="button" onClick={handleSearch}>
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
							<BookCard key={book.id} onClick={() => handleSelectBook(book)}>
								<BookCardContent>
									<BookImage src={book.cover_url} />
									<BookDetails>
										<div>
											<BookTitle>{book.name}</BookTitle>
											<BookAuthor>{book.author}</BookAuthor>
										</div>
										<StarRating
											stars={Math.round(
												book.ratings.reduce((sum, rating) => (sum += rating.rate), 0) /
													book.ratings.length
											)}
										/>
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

					{selectedBook && (
						<DrawerContent>
							<BookCard>
								<BookCardContent>
									<BookImage src={selectedBook.cover_url} />
									<BookDetails>
										<div>
											<BookTitle>{selectedBook.name}</BookTitle>
											<BookAuthor>{selectedBook.author}</BookAuthor>
										</div>
										<div>
											<StarRating
												stars={Math.round(
													selectedBook.ratings.reduce((sum, rating) => (sum += rating.rate), 0) /
														selectedBook.ratings.length
												)}
											/>
											<span>
												{selectedBook.ratings.length === 1
													? "1 avaliação"
													: `${selectedBook.ratings.length} avaliações`}
											</span>
										</div>
									</BookDetails>
								</BookCardContent>
								<BookCardInfo>
									<BookAbout>
										<BookmarkSimple size={24} />
										<div>
											<span>Categoria</span>
											{selectedBook.categories
												.map(
													({ categoryId }) =>
														categories.find((category) => category.id === categoryId)?.name
												)
												.join(", ")}
										</div>
									</BookAbout>
									<BookAbout>
										<BookOpen size={24} />
										<div>
											<span>Páginas</span>
											{selectedBook.total_pages}
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
							{session.data && isFormShown && (
								<CommentFormContainer>
									<AvaliationHeader>
										<AvaliationUser>
											<AvaliationAvatar src={session.data.user.avatar_url} alt="avatar" />
											<div>{session.data.user.name}</div>
										</AvaliationUser>
										<StarRating />
									</AvaliationHeader>
									<CommentFormInput placeholder="Escreva sua avaliação" />
									<CommentFormActions>
										<CommentFormButton>
											<X size={24} onClick={handleToggleCommentForm} />
										</CommentFormButton>
										<CommentFormButton>
											<Check size={24} />
										</CommentFormButton>
									</CommentFormActions>
								</CommentFormContainer>
							)}
							{selectedBook.ratings.map((rate) => {
								return rate.user.id === session.data?.user.id ? (
									<Avaliation avaliationOf="mine">
										<AvaliationHeader>
											<AvaliationUser>
												<AvaliationAvatar src={rate.user.avatar_url!} alt="avatar" />
												<div>
													{rate.user.name}
													<span>{new Date(rate.created_at).toLocaleDateString()}</span>
												</div>
											</AvaliationUser>
											<StarRating staticStatus stars={rate.rate} />
										</AvaliationHeader>
										<AvaliationComment>{rate.description}</AvaliationComment>
									</Avaliation>
								) : (
									<Avaliation key={rate.id}>
										<AvaliationHeader>
											<AvaliationUser>
												<AvaliationAvatar src={rate.user.avatar_url!} alt="avatar" />
												<div>
													{rate.user.name}
													<span>{new Date(rate.created_at).toLocaleDateString()}</span>
												</div>
											</AvaliationUser>
											<StarRating staticStatus stars={rate.rate} />
										</AvaliationHeader>
										<AvaliationComment>{rate.description}</AvaliationComment>
									</Avaliation>
								);
							})}
						</DrawerContent>
					)}
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
		include: { categories: true, ratings: { include: { user: true } } },
	});
	const categories = await prisma.category.findMany();

	return {
		props: {
			books: books.map((book) => ({
				...book,
				created_at: book.created_at.toISOString(),
				ratings: book.ratings.map((rating) => ({
					...rating,
					created_at: rating.created_at.toISOString(),
					user: { ...rating.user, created_at: rating.user.created_at.toISOString() },
				})),
			})),
			categories,
		},
	};
};
