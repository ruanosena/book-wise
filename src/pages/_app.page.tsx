import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { globalStyles } from "@/styles/global";

const nunito = Nunito_Sans({ subsets: ["latin"] });

globalStyles();

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<SessionProvider session={session}>
			<div className={nunito.className}>
				<Component {...pageProps} />
			</div>
		</SessionProvider>
	);
}
