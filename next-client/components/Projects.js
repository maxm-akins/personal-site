
import { Box, Grid, Paper, Typography, } from '@mui/material';
import { useTheme } from '@emotion/react';



export default function Projects({ projs }) {
    const theme = useTheme();



    return (
        <>
            <Box
                sx={ {
                    mt: 2
                } }
            >
                <Grid container spacing={ 2 }
                    alignItems="stretch"
                >
                    { projs.map((item) => {

                        return (
                            <Grid item xs={ 12 } md={ 6 } >
                                <Paper elevation={ 8 }
                                    sx={ {
                                        p: 2,
                                        height: "100%",
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "flex-start"
                                    } }
                                >
                                    <Typography
                                        sx={ {
                                            fontSize: 30,
                                            fontWeight: 500,
                                            color: theme.palette.primary.char,
                                            mb: 1
                                        } }
                                    >
                                        { item.name }

                                    </Typography>

                                    <Typography
                                        sx={ {
                                            width: "100%",
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: theme.palette.primary.main,
                                            mb: 2,
                                            "&:hover": {
                                                color: theme.palette.primary.secondary
                                            }

                                        } }
                                        onClick={ () => {
                                            if (item.link) window.open(item.link, '_blank')
                                            else return;
                                        } }
                                    >
                                        { (item.link) ? "Source Code" : "Source Code cannot be shared for security purposes" }



                                    </Typography>


                                    <Typography
                                        sx={ {
                                            fontSize: 15,
                                            fontWeight: 500,
                                            color: theme.palette.primary.char,
                                        } }
                                    >
                                        { item.details }

                                    </Typography>

                                </Paper>

                            </Grid>
                        )

                    }) }

                </Grid>


            </Box>

        </>

    );
}