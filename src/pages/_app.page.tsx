import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";
import { globalStyles } from "@/styles/global";

const nunito = Nunito_Sans({ subsets: ["latin"] });

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={nunito.className}>
			<Component {...pageProps} />
		</div>
	);
}
