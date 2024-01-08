
import { Box, Grid, Paper, Accordion, AccordionSummary, AccordionDetails, Typography, Alert, useMediaQuery, Icon } from '@mui/material';
import { useTheme } from '@emotion/react';



export default function DegreeProgress({ classes }) {
    const theme = useTheme();
    const terms = ["Spring 2023-2024", "Fall 2023-2024", "Spring 2022-2023", "Fall 2022-2023", "Spring 2021-2022", "Fall 2021-2022"]

    return (
        <>
            <Box
                sx={ {
                    mt: 2
                } }
            >

                <Box>
                    <Grid container
                        sx={ {
                            mb: 2
                        } }
                    >
                        <Grid item xs={ 12 } md={ 6 }>
                            <Typography
                                sx={ {
                                    fontSize: 40,
                                    fontWeight: 400,
                                    color: theme.palette.primary.char
                                } }
                            >

                                Current GPA: <strong> 3.9</strong>
                            </Typography>

                        </Grid>
                        <Grid item xs={ 12 } md={ 6 }>
                            <Typography
                                align={ useMediaQuery(theme.breakpoints.up('md')) ? "right" : "left" }
                                sx={ {
                                    width: "100%",
                                    fontSize: 40,
                                    fontWeight: 400,
                                    color: theme.palette.primary.char
                                } }
                            >

                                Current Year: <strong> Junior </strong>
                            </Typography>

                        </Grid>

                    </Grid>

                </Box>




                { terms.map((term) => {

                    return (

                        <Accordion TransitionProps={ { unmountOnExit: true } } >
                            <AccordionSummary
                                expandIcon={ <Icon className='material-symbols-outlined' sx={ { fontSize: 50, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48;" } }  >arrow_drop_down</Icon> }
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>{ term }</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                { classes?.map((item) => {

                                    if (item.term === term) {

                                        return (

                                            <Paper elevation={ 8 }
                                                sx={ {
                                                    p: 2,
                                                    mb: 2
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
                                                            { item.name }


                                                        </Typography>
                                                        <Typography
                                                            sx={ {
                                                                color: theme.palette.primary.char,
                                                            } }
                                                        >
                                                            { item.code }
                                                        </Typography>
                                                        <Typography
                                                            sx={ {
                                                                color: theme.palette.primary.main,
                                                                width: "100%"
                                                            } }
                                                        >
                                                            Final Grade: { item.grade }

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

                                                            { item.term }
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={ 12 }
                                                        sx={ {
                                                            mt: 3
                                                        } }
                                                    >

                                                        <Alert
                                                            sx={ {
                                                                mb: 2

                                                            } }
                                                            severity="info"
                                                        >
                                                            The following language was taken directly from the University of Pittsburgh's website.
                                                        </Alert>


                                                        <Typography
                                                            align='left'
                                                            sx={ {
                                                                fontSize: 15,
                                                            } }
                                                        >
                                                            { item.details }

                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Paper>
                                        )

                                    }
                                    else return;
                                })

                                }
                            </AccordionDetails>
                        </Accordion>

                    )
                }) }

            </Box >



        </>

    );
}