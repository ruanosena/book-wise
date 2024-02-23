import Head from "next/head";
import {
	Aside,
	AsideHeading,
	Avatar,
	BookAuthor,
	BookSynopsis,
	BookTitle,
	Container,
	Content,
	FeaturedCard,
	FeaturedContent,
	FeaturedHeader,
	FeaturedImage,
	FeaturedInfo,
	Heading,
	LastReadingHeading,
	LastReadingLink,
	Main,
	PopularCard,
	PopularContent,
	PopularImage,
	PopularLink,
	PostBody,
	PostCard,
	PostContent,
	PostHeader,
	PostImage,
	Posts,
	RelativeDate,
	UserInfo,
	UserName,
} from "./styles";
import { Sidebar } from "@/components/Sidebar";
import { CaretRight, ChartLineUp } from "@phosphor-icons/react/dist/ssr";
import { StarRating } from "@/components/StarRating";

export default function Home() {
	return (
		<>
			<Head>
				<title>Book Wise</title>
				<meta name="description" content="Avaliação e gerenciamento de leituras" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container>
				<Sidebar />
				<Main>
					<Content>
						<Heading>
							<ChartLineUp size={32} />
							Início
						</Heading>
						<LastReadingHeading>
							<span>Sua última leitura</span>
							<LastReadingLink href="/">
								Ver todas <CaretRight weight="bold" />
							</LastReadingLink>
						</LastReadingHeading>
						<FeaturedCard>
							<FeaturedImage src="/images/books/entendendo-algoritmos.png" />
							<FeaturedContent>
								<FeaturedHeader>
									<FeaturedInfo>
										<RelativeDate>Há 2 dias</RelativeDate>
										<StarRating />
									</FeaturedInfo>
									<div>
										<BookTitle>Entendendo Algoritmos</BookTitle>
										<BookAuthor>Aditya Bhargava</BookAuthor>
									</div>
								</FeaturedHeader>
								<BookSynopsis>
									Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id
									vestibulum imperdiet a at imperdiet lectu...
								</BookSynopsis>
							</FeaturedContent>
						</FeaturedCard>

						<span>Avaliações mais recentes</span>
						<Posts>
							<PostCard>
								<PostHeader>
									<UserInfo>
										<Avatar src="https://github.com/ruanosena.png" alt="" width={40} height={40} />
										<div>
											<UserName>Jaxson Dias</UserName>
											<RelativeDate>Hoje</RelativeDate>
										</div>
									</UserInfo>
									<StarRating />
								</PostHeader>
								<PostBody>
									<PostImage src="/images/books/o-hobbit.png" alt="" />
									<PostContent>
										<div>
											<BookTitle>O Hobbit</BookTitle>
											<BookAuthor>J.R.R. Tolkien</BookAuthor>
										</div>
										<BookSynopsis>
											Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean
											posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero
											pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit
											nibh... ver mais
										</BookSynopsis>
									</PostContent>
								</PostBody>
							</PostCard>

							<PostCard>
								<PostHeader>
									<UserInfo>
										<Avatar src="https://github.com/ruanosena.png" alt="" width={40} height={40} />
										<div>
											<UserName>Jaxson Dias</UserName>
											<RelativeDate>Hoje</RelativeDate>
										</div>
									</UserInfo>
									<StarRating />
								</PostHeader>
								<PostBody>
									<PostImage src="/images/books/o-hobbit.png" alt="" />
									<PostContent>
										<div>
											<BookTitle>O Hobbit</BookTitle>
											<BookAuthor>J.R.R. Tolkien</BookAuthor>
										</div>
										<BookSynopsis>
											Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean
											posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero
											pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit
											nibh... ver mais
										</BookSynopsis>
									</PostContent>
								</PostBody>
							</PostCard>

							<PostCard>
								<PostHeader>
									<UserInfo>
										<Avatar src="https://github.com/ruanosena.png" alt="" width={40} height={40} />
										<div>
											<UserName>Jaxson Dias</UserName>
											<RelativeDate>Hoje</RelativeDate>
										</div>
									</UserInfo>
									<StarRating />
								</PostHeader>
								<PostBody>
									<PostImage src="/images/books/o-hobbit.png" alt="" />
									<PostContent>
										<div>
											<BookTitle>O Hobbit</BookTitle>
											<BookAuthor>J.R.R. Tolkien</BookAuthor>
										</div>
										<BookSynopsis>
											Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean
											posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero
											pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit
											nibh... ver mais
										</BookSynopsis>
									</PostContent>
								</PostBody>
							</PostCard>
						</Posts>
					</Content>

					<Aside>
						<AsideHeading>
							Livros populares
							<PopularLink href="/">
								Ver todos <CaretRight weight="bold" />
							</PopularLink>
						</AsideHeading>

						<PopularCard>
							<PopularImage src="/images/books/Book.png" alt="" />
							<PopularContent>
								<div>
									<BookTitle>A revolução dos bixos</BookTitle>
									<BookAuthor>George Orwell</BookAuthor>
								</div>
								<StarRating />
							</PopularContent>
						</PopularCard>

						<PopularCard>
							<PopularImage src="/images/books/Book.png" alt="" />
							<PopularContent>
								<div>
									<BookTitle>A revolução dos bixos</BookTitle>
									<BookAuthor>George Orwell</BookAuthor>
								</div>
								<StarRating />
							</PopularContent>
						</PopularCard>

						<PopularCard>
							<PopularImage src="/images/books/Book.png" alt="" />
							<PopularContent>
								<div>
									<BookTitle>A revolução dos bixos</BookTitle>
									<BookAuthor>George Orwell</BookAuthor>
								</div>
								<StarRating />
							</PopularContent>
						</PopularCard>

						<PopularCard>
							<PopularImage src="/images/books/Book.png" alt="" />
							<PopularContent>
								<div>
									<BookTitle>A revolução dos bixos</BookTitle>
									<BookAuthor>George Orwell</BookAuthor>
								</div>
								<StarRating />
							</PopularContent>
						</PopularCard>
					</Aside>
				</Main>
			</Container>
		</>
	);
}
