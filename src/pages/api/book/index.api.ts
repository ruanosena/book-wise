import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "GET") {
		return res.status(405).end();
	}

	const bookId = String(req.query.bookId);

	const book = await prisma.book.findUnique({
		where: {
			id: bookId,
		},
	});

	return res.json({ book });
}
