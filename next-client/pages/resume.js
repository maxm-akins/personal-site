import Head from 'next/head';
import { Box, Typography, useMediaQuery, Tab, Tabs } from '@mui/material';
import { useTheme } from '@emotion/react';
import axios from "axios"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import DegreeProgress from '../components/DegreeProgress';
import SkillsAndAchievements from '../components/SkillsAndAchievements';

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



    const res2 = await axios.get(
        "http://localhost:3001/data/classes",
        {
            headers:
            {
                "Content-Type": "application/json",
                "CRSF-Test-Header": "CRSF-Test"
            },
        }
    );

    const classes = await res2.data;



    return { props: { exps, projs, classes } }
}



export default function resume({ exps, projs, classes }) {
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
                    p: expand ? "5%" : "20%",
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
                { tab === 2 && (<DegreeProgress classes={ classes } />) }
                { tab === 3 && (<SkillsAndAchievements />) }

            </Box >


        </>

    );
}