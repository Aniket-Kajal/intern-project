import Layout from '@/components/layout/Layout';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps : {session, ...pageProps}, }) {
  return(
    <SessionProvider session={session}>
    <Layout>
    <Component {...pageProps} />
    <Toaster position='top-center' />
    </Layout>
    </SessionProvider>
  )
  
}
