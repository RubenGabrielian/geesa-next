import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from '../components/layouts/Navbar'
import "../styles/global.scss";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Footer from "../components/layouts/Footer";


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoading(true);
    });

    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    })
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Navbar />
      {
        loading ? <Loader /> : <Component {...pageProps} />
      }
      <Footer />
    </>
  )
}

export default MyApp
