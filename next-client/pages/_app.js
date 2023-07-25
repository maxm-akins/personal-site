import '../styles/global.css';

import { ThemeProvider } from '@emotion/react';
import { lightTheme } from '../styles/MUITheme';
import Head from 'next/head';
import Layout from '../components/layout';
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }) {


    return (

        <ThemeProvider theme={ lightTheme } >
            <Head>

                <link rel="icon" href="/images/MA_logo_verySmall.png" />

                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;family=Press+Start+2P&amp;display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                    rel="stylesheet"
                />

                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            <Layout>

                <Component { ...pageProps } />

            </Layout>
        </ThemeProvider>


    )



}