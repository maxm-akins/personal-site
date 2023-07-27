import Head from 'next/head';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

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
                    p: expand ? "15%" : "29%",
                    pt: 11,
                    pb: 5


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



                <Grid container spacing={ 2 }>



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
                    <Grid item xs={ 12 } md={ 6 }
                    >

                        <img src="/images/grad.jpg"

                        />
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }
                    >

                        <img src="/images/momHoco.jpg"

                        />
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }

                    >

                        <img src="/images/football2.jpg"

                        />
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }
                        sx={ {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        } }
                    >

                        <img src="/images/fblaLogo.png"

                        />
                    </Grid>


                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        I went to high school in Littlestown, PA. (Yes, thats what its actually called. And yes, it was little.)
                        Throughout high school I was a member of Future Business Leaders of America where I served as Reporter and President of our local chapter. Additionally,
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
                    <Grid item xs={ 12 } md={ 6 }

                    >

                        <img src="/images/pittMoveIn.jpg"

                        />
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }

                    >

                        <img src="/images/pitt2.jpg"

                        />
                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        I am currently enrolled at the University of Pittsburgh - Main Campus as a Computer Science major (please don't hold that against my social skills). I have an
                        intended graduation date in Spring of 2025.  I currently have a GPA of 3.9 and have made the School of Computing and Information's Dean's List
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
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 700
                            } }>
                            - Pittsburgh Sports (all of them)
                        </Typography>


                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }

                    >

                        <img src="/images/steelers.jpg"

                        />
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }

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
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 700
                            } }>
                            - Friends
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }>
                        <img src="/images/friends.jpg"
                        />
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }>
                        <img src="/images/bus.jpg"
                        />
                        <Typography
                            sx={ {
                                fontSize: 15,
                                fontWeight: 500,
                                mt: 1
                            } }>
                            ^ my best friend
                        </Typography>
                    </Grid>



                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 700
                            } }>
                            - Anything technology
                        </Typography>


                    </Grid>
                    <Grid item xs={ 12 }   >

                        <img src="/images/pc.jpg"

                        />
                        <Typography
                            sx={ {
                                fontSize: 15,
                                fontWeight: 500,
                                mt: 1

                            } }>
                            I built my first computer during my freshman year of high school and have been upgrading and rebuilding it ever since.
                        </Typography>
                    </Grid>

                </Grid>

            </Box >




















        </>

    );
}