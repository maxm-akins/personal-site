import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/index.module.css';
import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { headers } from 'next/dist/client/components/headers';

import Image from 'next/image';



export default function aboutThisSite() {
    const theme = useTheme();
    let expand = useMediaQuery(theme.breakpoints.down('md'))



    return (
        <>
            <Head>
                <title> About This Site </title>
            </Head>


            <Box
                sx={ {
                    transition: "all 1s",
                    height: "100%",
                    width: "100%",
                    p: expand ? "15%" : "30%",
                    pt: 11,


                } }
            >


                <Typography
                    align='left'
                    sx={ {
                        // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                        // backgroundClip: "text",
                        width: "100%",
                        color: theme.palette.primary.main,
                        fontFamily: "Inter",
                        fontWeight: 900,
                        fontSize: 60
                    } }
                >
                    How this website was built

                </Typography>
                <Typography
                    align='left'
                    sx={ {
                        // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                        // backgroundClip: "text",
                        width: "100%",
                        color: theme.palette.primary.char,
                        fontFamily: "Inter",
                        fontWeight: 200,
                        fontSize: 20,
                        mb: 10
                    } }
                >
                    July 17, 2023 - Maxm Akins

                </Typography>



                <Grid container spacing={ 4 }>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        <img src="/images/nextjs-logo.png"

                        />
                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        Next.js was used as the primary framework for the development of this site.
                        As Next continues to flex it's power and potential in the web development world,
                        it was my wish to demostrate my ability to effectively use and benefit from the framework.
                        Across the site, you will encouter (although you may not notice) different inclusions of
                        Next.js features. These range from pre-rendering like static generation (this page you happen to be on)
                        and server-side rendering, to client-side rendering. However, I am not even close to having a full
                        comprehension of the wide scope of Next.js resources and continue to learn and update this site as I go.


                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >
                        <Typography
                            sx={ {
                                fontSize: 30,
                                fontWeight: 900
                            } }>
                            Front-End:

                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }>
                        <img src="/images/reactLogo.png"
                        />

                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }>
                        <img src="/images/materialUiLogo.png"
                        />

                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }>
                        <svg viewBox="3.7 3.7 43.6 43.6" xmlns="http://www.w3.org/2000/svg"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d" /><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" /><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96" /></svg>

                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        To contruct the visually appealing front-end that you are viewing now,
                        I utilized the Material UI libarary of React components. Framer Animation was
                        also used to include attractive animations. While implementing these libaries, I kept
                        responsiveness in mind, and you should find a comfortable viewing experience no
                        matter the size of your screen (feel free to test it out).
                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >
                        <Typography
                            sx={ {
                                fontSize: 30,
                                fontWeight: 900
                            } }>
                            Backend:

                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }>
                        <img src="/images/nodejsLogo.png"
                        />

                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }>
                        <img src="/images/expressLogo.png"
                        />

                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }>
                        <img src="/images/mongoLogo.png"
                        />

                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        Although, Next.js provides its own API service, I am still partial to using a
                        completely private and seperate backend server for my apps. To accomplish this I used Node.js
                        alongside Express.js and mongoDB as the primary and notable additions.
                    </Grid>





                </Grid>

            </Box >




















        </>

    );
}