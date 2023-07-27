
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/router'
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children, home }) {
    const router = useRouter()
    const theme = useTheme();

    return (
        <>

            <NavBar />
            <Box
                sx={ {
                    width: "100%",
                    minHeight: "100vh",
                    background: router.pathname === "/" ? `linear-gradient(110deg, ${theme.palette.primary.main}  20%, ${theme.palette.primary.secondary} 20%)` : theme.palette.background.white,
                } }>

                { children }


                <Footer />
            </Box>

        </>


    );
}