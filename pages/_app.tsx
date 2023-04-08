import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Navbar from '../components/Navbar';
import NavbarTop from '../components/NavbarTop';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
        <NavbarTop />
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
