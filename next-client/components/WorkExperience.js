import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/index.module.css';
import { Box, Grid, Button, Paper, Typography, useMediaQuery, Tab, Tabs, CustomTabPanel, useRadioGroup, collapseClasses } from '@mui/material';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { headers } from 'next/dist/client/components/headers';
import axios from "axios";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';





export default function WorkExperience({ exps }) {
    const theme = useTheme();




    return (
        <>
            <Box
                sx={ {
                    mt: 2
                } }
            >

                <Grid container spacing={ 2 }>

                    { exps?.map((item) => {

                        return (
                            <Grid item xs={ 12 } >
                                <Paper elevation={ 8 }
                                    sx={ {
                                        p: 2
                                    } }
                                >
                                    <Grid container>
                                        <Grid item xs={ 8 }
                                            sx={ {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                alignItems: "center"
                                            } }
                                        >
                                            <Typography
                                                sx={ {
                                                    fontSize: 30,
                                                    fontWeight: 500,
                                                    color: theme.palette.primary.char,
                                                    mr: 1,
                                                } }
                                            >
                                                { item.companyName }


                                            </Typography>
                                            <Typography
                                                sx={ {
                                                    color: theme.palette.primary.char,
                                                } }
                                            >
                                                { item.companyLocation }
                                            </Typography>
                                            <Typography
                                                sx={ {
                                                    color: theme.palette.primary.main,
                                                    width: "100%"
                                                } }
                                            >
                                                { item.title }

                                            </Typography>

                                        </Grid>
                                        <Grid item xs={ 4 }>
                                            <Typography
                                                align='right'
                                                sx={ {
                                                    fontSize: 15,
                                                    mt: 1,
                                                } }

                                            >
                                                { item.startDate } -  { item.endDate }
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={ 12 }
                                            sx={ {
                                                mt: 3
                                            } }
                                        >
                                            { Object.keys(item.details)?.map((key) => {
                                                return (
                                                    <Typography
                                                        align='left'
                                                        sx={ {
                                                            fontSize: 15,
                                                        } }

                                                    >
                                                        -  { item.details[key] }
                                                    </Typography>
                                                )
                                            }) }


                                        </Grid>
                                    </Grid>
                                </Paper>

                            </Grid>
                        )
                    })


                    }


                </Grid>


            </Box>









        </>

    );
}