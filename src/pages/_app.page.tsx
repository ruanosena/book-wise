import type { AppProps } from "next/app";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={nunito.className}>
			<Component {...pageProps} />
		</div>
	);
}
