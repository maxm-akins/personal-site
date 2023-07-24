
import { Divider, Slide, useMediaQuery, List, Grid, ListItem, ListItemText, ListItemButton, ListItemIcon, Box, AppBar, Button, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';


export default function Footer({ children, home }) {
    const router = useRouter()
    const theme = useTheme();
    const [showMenu, setShowMenu] = useState(false);
    const [showCollapseMenu, setShowCollapseMenu] = useState(false);
    let showCollapse = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <>
            <Box
                sx={ {
                    backgroundColor: theme.palette.primary.char,
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",


                } }
            >
                <Grid container>

                    <Grid item xs={ 6 }
                        sx={ {
                            p: 2
                        } }
                    >
                        <Typography
                            align='left'
                            sx={ {
                                // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                                // backgroundClip: "text",
                                width: "100%",
                                color: theme.palette.primary.white,
                                fontFamily: "Inter",
                                fontWeight: 200,
                                fontSize: 15,
                                mb: 1,
                                transition: "all .15s",
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                    textDecoration: "underline"
                                }
                            } }
                            onClick={ () => {
                                color: theme.palette.primary.main,

                                    router.push("/resume")
                            } }
                        >
                            Resume
                        </Typography>
                        <Typography
                            align='left'
                            sx={ {
                                // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                                // backgroundClip: "text",
                                width: "100%",
                                color: theme.palette.primary.white,
                                fontFamily: "Inter",
                                fontWeight: 200,
                                fontSize: 15,
                                mb: 1,
                                transition: "all .15s",
                                "&:hover": {
                                    color: theme.palette.primary.main,

                                    textDecoration: "underline"
                                }
                            } }
                            onClick={ () => {
                                router.push("/links-and-contact")
                            } }
                        >
                            Links and Contact
                        </Typography>

                        <Typography
                            align='left'
                            sx={ {
                                // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                                // backgroundClip: "text",
                                width: "100%",
                                color: theme.palette.primary.white,
                                fontFamily: "Inter",
                                fontWeight: 200,
                                fontSize: 15,
                                mb: 1,
                                transition: "all .15s",
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                    textDecoration: "underline"
                                }
                            } }
                            onClick={ () => {
                                router.push("/about-this-site")
                            } }
                        >
                            About this site
                        </Typography>

                        <Typography
                            align='left'
                            sx={ {
                                // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                                // backgroundClip: "text",
                                width: "100%",
                                color: theme.palette.primary.white,
                                fontFamily: "Inter",
                                fontWeight: 200,
                                fontSize: 15,
                                mb: 1,
                                transition: "all .15s",
                                "&:hover": {
                                    color: theme.palette.primary.main,
                                    textDecoration: "underline"
                                }
                            } }
                            onClick={ () => {
                                router.push("/about-me")
                            } }
                        >
                            About me
                        </Typography>




                    </Grid>
                    <Grid item xs={ 6 }
                        sx={ {
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "end",
                            alignItems: "center"

                        } }
                    >

                        <IconButton
                            sx={ {
                                maxHeight: 60,
                                "&:hover": {
                                    backgroundColor: theme.palette.background.transparentish,
                                }

                            } }
                            onClick={ () => {
                                window.open("https://linkedin.com/in/maxm-akins", '_blank');
                            } }

                        >
                            <img src="/images/funLinkedIn.png"
                                style={ { maxHeight: 36 } }
                            />

                        </IconButton>
                        <IconButton
                            sx={ {
                                maxHeight: 60,
                                "&:hover": {
                                    backgroundColor: theme.palette.background.transparentish,
                                }
                            } }
                            onClick={ () => {
                                window.open("https://github.com/maxm-akins", '_blank');
                            } }
                        >
                            <img src="/images/funGitHub.png"
                                style={ { maxHeight: 36 } }
                            />

                        </IconButton>
                        <IconButton
                            sx={ {
                                maxHeight: 60,
                                "&:hover": {
                                    backgroundColor: theme.palette.background.transparentish,
                                }
                            } }
                            onClick={ () => {
                                window.open("https://twitter.com/maxmakins", '_blank');
                            } }
                        >
                            <img src="/images/funTwitter.png"
                                style={ { maxHeight: 36 } }
                            />

                        </IconButton>




                    </Grid>


                </Grid>

            </Box>

        </>


    );
}