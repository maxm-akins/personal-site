import Head from 'next/head';
import { Box, Grid, Typography, useMediaQuery, List, ListItem, ListItemButton, ListItemIcon, Snackbar } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

export default function linksAndContact() {
    const theme = useTheme();
    let expand = useMediaQuery(theme.breakpoints.down('md'))
    const [openSnack, setOpenSnack] = useState(false);



    return (
        <>
            <Head>
                <title> Links and Contacts </title>
            </Head>

            <Snackbar
                open={ openSnack }
                autoHideDuration={ 6000 }
                onClose={ () => setOpenSnack(false) }
                message="Email copied to clipboard"
            />

            <Box
                sx={ {
                    transition: "all 1s",
                    minHeight: "100vh",
                    width: "100%",
                    p: expand ? "15%" : "29%",
                    pt: 11,
                    pb: 5
                } }
            >


                <Typography
                    align='center'
                    sx={ {
                        // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                        // backgroundClip: "text",
                        width: "100%",
                        color: theme.palette.primary.main,
                        fontFamily: "Inter",
                        fontWeight: 900,
                        fontSize: 60,
                        mb: 6
                    } }
                >
                    Links and Contact
                </Typography>

                <Grid spacing={ 2 } container>
                    <Grid item xs={ 12 } md={ 6 }>


                        <List>
                            <ListItem disablePadding
                                sx={ {
                                    mb: 2,
                                    display: "flex",
                                    justifyContent: "center"
                                } }

                            >
                                <ListItemButton
                                    sx={ {
                                        display: "flex",
                                        justifyContent: "center"
                                    } }
                                    onClick={ () => {
                                        setOpenSnack(true);
                                        navigator.clipboard.writeText("maxm.akins@gmail.com");
                                    } }
                                >
                                    <ListItemIcon>
                                        <img src="/images/funEmail.png"
                                            style={ { maxHeight: 200 } }
                                        />
                                    </ListItemIcon>


                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding
                                sx={ {
                                    mb: 2
                                } }
                            >
                                <ListItemButton
                                    sx={ {
                                        display: "flex",
                                        justifyContent: "center"
                                    } }
                                    onClick={ () => {
                                        window.open("https://linkedin.com/in/maxm-akins", '_blank');
                                    } }
                                >
                                    <ListItemIcon>
                                        <img src="/images/funLinkedIn.png"
                                            style={ { maxHeight: 200 } }
                                        />
                                    </ListItemIcon>


                                </ListItemButton>
                            </ListItem>


                        </List>



                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }>

                        <List>

                            <ListItem disablePadding
                                sx={ {
                                    mb: 2
                                } }
                            >
                                <ListItemButton
                                    sx={ {
                                        display: "flex",
                                        justifyContent: "center"
                                    } }
                                    onClick={ () => {
                                        window.open("https://github.com/maxm-akins", '_blank');
                                    } }

                                >
                                    <ListItemIcon>
                                        <img src="/images/funGitHub.png"
                                            style={ { maxHeight: 200 } }
                                        />
                                    </ListItemIcon>


                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding
                                sx={ {
                                    mb: 2
                                } }
                            >
                                <ListItemButton
                                    sx={ {
                                        display: "flex",
                                        justifyContent: "center"
                                    } }
                                    onClick={ () => {
                                        window.open("https://twitter.com/maxmakins", '_blank');
                                    } }

                                >
                                    <ListItemIcon>
                                        <img src="/images/funTwitter.png"
                                            style={ { maxHeight: 200 } }
                                        />
                                    </ListItemIcon>


                                </ListItemButton>
                            </ListItem>

                        </List>




                    </Grid>

                </Grid>









            </Box >


        </>

    );
}