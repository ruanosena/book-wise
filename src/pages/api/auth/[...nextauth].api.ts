import { PrismaAdapter } from "@/lib/auth/prisma.adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID || "",
			clientSecret: process.env.GITHUB_SECRET || "",
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
			authorization: {
				params: {
					scope:
						"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
				},
			},
			profile(profile: GoogleProfile) {
				return {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					avatar_url: profile.picture,
				};
			},
		}),
	],

	callbacks: {
		async session({ session, user }) {
			return {
				...session,
				user,
			};
		},
	},
};

export default NextAuth(authOptions);
