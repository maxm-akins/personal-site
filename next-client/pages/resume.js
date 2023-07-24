import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/index.module.css';
import { Box, Grid, Paper, Typography, useMediaQuery, Tab, Tabs, CustomTabPanel, useRadioGroup } from '@mui/material';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { headers } from 'next/dist/client/components/headers';
import axios from "axios"


import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';


export const getServerSideProps = async () => {

    const res = await axios.get(
        "http://localhost:3001/data/workExperience",
        {
            headers:
            {
                "Content-Type": "application/json",
                "CRSF-Test-Header": "CRSF-Test"
            },
        }
    );

    const exps = await res.data;

    const res1 = await axios.get(
        "http://localhost:3001/data/projects",
        {
            headers:
            {
                "Content-Type": "application/json",
                "CRSF-Test-Header": "CRSF-Test"
            },
        }
    );

    const projs = await res1.data;









    return { props: { exps, projs } }
}



export default function resume({ exps, projs }) {
    const router = useRouter();
    const { q, o } = router.query;
    const theme = useTheme();
    let expand = useMediaQuery(theme.breakpoints.down('md'))
    const [tab, setTab] = useState(q || 0);


    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const tag = parseInt(urlParams.get("q"));
        setTab(tag || 0);

    }, [router.query])


    return (
        <>
            <Head>
                <title> Resume </title>
            </Head>


            <Box
                sx={ {
                    transition: "all 1s",
                    height: "100%",
                    width: "100%",
                    p: expand ? "15%" : "20%",
                    pt: 11,
                    pb: 5,
                    minHeight: "100vh"


                } }
            >


                <Typography
                    align='left'
                    sx={ {

                        width: "100%",
                        color: theme.palette.primary.main,
                        fontFamily: "Inter",
                        fontWeight: 900,
                        fontSize: 60,
                        mb: 2
                    } }
                >
                    Resume
                </Typography>


                <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
                    <Tabs
                        variant="scrollable"
                        scrollButtons="auto"
                        onChange={ (e, newValue) => {
                            setTab(newValue);
                            router.push({
                                pathname: '/resume',
                                query: { "q": `${newValue}` }
                            },
                                undefined, { shallow: true }
                            )
                        }

                        }
                        value={ tab }>
                        <Tab label="Work Experience" value={ 0 } />
                        <Tab label="Projects" value={ 1 } />
                        <Tab label="Degree Progress" value={ 2 } />
                        <Tab label="Skills and Achievements" value={ 3 } />
                    </Tabs>
                </Box>




                { tab === 0 && (<WorkExperience exps={ exps } />) }
                { tab === 1 && (<Projects projs={ projs } />) }



                {/* <Grid container spacing={ 4 }>



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
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 700
                            } }>
                            - Friends
                        </Typography>
                    </Grid>
                    <Grid item xs={ 12 }>
                        <img src="/images/friends.jpg"
                        />
                    </Grid>
                    <Grid item xs={ 12 }>
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
                    <Grid item xs={ 12 }

                    >

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

                </Grid> */}

            </Box >




















        </>

    );
}