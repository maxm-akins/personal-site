import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/index.module.css';
import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { headers } from 'next/dist/client/components/headers';

import Image from 'next/image';



export default function aboutMe() {
    const theme = useTheme();
    let expand = useMediaQuery(theme.breakpoints.down('md'))



    return (
        <>
            <Head>
                <title> About Maxm </title>
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
                        fontSize: 60,
                        mb: 2
                    } }
                >
                    About Maxm
                </Typography>



                <Grid container spacing={ 4 }>



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
                            High School:

                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }
                    >

                        <img src="/images/grad.jpeg"

                        />
                    </Grid>
                    <Grid item xs={ 12 } md={ 5 }

                    >

                        <img src="/images/fblaLogo.png"

                        />
                    </Grid>
                    <Grid item xs={ 12 } md={ 3 }

                    >

                        <img src="/images/football.png"

                        />
                    </Grid>

                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        I went to high school in Littlestown, PA. (Yes, thats what its actually called. And yes, it was little.)
                        Throughout high school I was a member of Future Business Leader of America where I served as Reporter and President. Additionally,
                        I was captain of our football team. I graduated as Valedictorian in 2021.


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
                            College:

                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 }

                    >

                        <img src="/images/pittMoveIn.jpg"

                        />
                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        I currently enrolled at the University of Pittsburgh - Main Campus with
                        a intended graduation date in Spring of 2025. I am, as I am sure you are aware,
                        a computer science major. Please don't hold that against my social skills. I have a
                        current GPA of 3.9 and have made the School of Computing and Information's Dean's List
                        in all four of my semesters at Pitt.


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
                            Interests:

                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        - Pittsburgh Sports (all of them)

                    </Grid>
                    <Grid item xs={ 12 }

                    >

                        <img src="/images/steelers.jpg"

                        />
                    </Grid>
                    <Grid item xs={ 12 }

                    >

                        <img src="/images/peach.jpg"

                        />
                    </Grid>




                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        - Friends

                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        <img src="/images/Nextjs-logo.png"

                        />
                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        - Anything technology

                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        <img src="/images/Nextjs-logo.png"

                        />
                    </Grid>

                </Grid>

            </Box >




















        </>

    );
}