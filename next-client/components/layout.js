
import { Divider, Slide, useMediaQuery, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Box, AppBar, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import NavBar from './NavBar';
import splash from "../public/images/splash.jpg"

const name = 'Maxm Akins';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    const router = useRouter()
    const theme = useTheme();
    const [showMenu, setShowMenu] = useState(false);
    const [showCollapseMenu, setShowCollapseMenu] = useState(false);
    let showCollapse = useMediaQuery(theme.breakpoints.up('md'))
    const containerRef = useRef(null);







    return (
        <>

            <NavBar />
            <Box
                sx={ {
                    width: "100%",
                    minHeight: "100vh",
                    // position: "absolute",
                    background: router.pathname === "/" ? `linear-gradient(110deg, ${theme.palette.primary.main}  20%, ${theme.palette.primary.secondary} 20%)` : theme.palette.background.white,
                    // backgroundImage: `"url(/images/splash.jpg)"`
                } }>


                { children }




            </Box>
        </>


    );
}