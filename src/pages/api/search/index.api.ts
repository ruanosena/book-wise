import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return res.status(405).end();
	}

	const query = String(req.query.q);

	const booksByName = await prisma.book.findMany({
		where: {
			name: {
				contains: query,
				mode: "insensitive",
			},
		},
		include: { categories: true, ratings: { include: { user: true } } },
	});
	const booksByAuthor = await prisma.book.findMany({
		where: {
			author: {
				contains: query,
				mode: "insensitive",
			},
		},
		include: { categories: true, ratings: { include: { user: true } } },
	});

	return res.json({ books: [...booksByName, ...booksByAuthor] });
}
