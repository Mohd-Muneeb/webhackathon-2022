import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import auth from "../auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Head from "next/head";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
	const [user, loading] = useAuthState(auth);

	return (
		<div>
			<Head>
				<title>Wally</title>
				<meta
					name="A web app to ease the adoption system for animals"
					content="A adoption website for animals!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Component {...pageProps} user={user} loading={loading} />
			<Footer />
		</div>
	);
}
