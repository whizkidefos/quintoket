import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { Navbar, Footer } from '../components';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className='min-h-screen bg-white dark:bg-nft-dark'>
        <Navbar />
        <main className="pt-65">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/b17b62a576.js" crossorigin="anonymous" />
    </ThemeProvider>
  );
}

export default MyApp
