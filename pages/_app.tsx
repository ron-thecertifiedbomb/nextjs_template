import '../styles/global.css';
import type { AppProps } from "next/app";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <
    >
      <NavBar />
  
      <Component {...pageProps} />

 

      <Footer />
    </>
  );
}