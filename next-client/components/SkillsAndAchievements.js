
import { Box, Grid, Divider, Tooltip, Typography, Icon } from '@mui/material';
import { useTheme } from '@emotion/react';
import Image from 'next/image'
import c from '/public/icons/c-logo.png'
import java from '/public/icons/java.svg'
import python from '/public/icons/python.png'
import csharp from '/public/icons/csharp.svg'
import js from '/public/icons/js.svg'
import go from '/public/icons/go.png'
import dart from '/public/icons/dart.png'
import html from '/public/icons/html.png'
import css from '/public/icons/css.png'
import react from '/public/icons/reactjs.png'
import node from '/public/icons/node.png'
import next from '/public/icons/next.png'
import angular from '/public/icons/angular.png'
import express from '/public/icons/express.png'
import fastapi from '/public/icons/fastapi.svg'
import flutter from '/public/icons/flutter.png'
import dotnet from '/public/icons/dotnet.png'
import mongo from '/public/icons/mongo.png'
import git from '/public/icons/git.png'
import aws from '/public/icons/aws.png'
import ocean from '/public/icons/ocean.png'
import ps from '/public/icons/ps.png'



export default function SkillsAndAchievements() {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={ {
                    mt: 2
                } }
            >

                <Typography
                    sx={ {
                        fontSize: 40,
                        fontWeight: 900,
                        color: theme.palette.primary.char,
                        mb: 2
                    } }
                >
                    Technical Skills
                </Typography>

                <Grid container spacing={ 5 } sx={ { mb: 2 } }>

                    <Tooltip title="C">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ c }
                                width={ 90 }
                                height={ 90 }
                            />
                        </Grid>
                    </Tooltip>

                    <Tooltip title="Java">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ java }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>

                    <Tooltip title="Python">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ python }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>

                    <Tooltip title="C#">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ csharp }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Javascript">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ js }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Go">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ go }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Dart">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ dart }
                                width={ 100 }
                                height={ 60 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="HTML">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ html }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="CSS">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ css }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="React.js">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ react }
                                width={ 100 }
                                height={ 80 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Node.js">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ node }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Next.js">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ next }
                                width={ 100 }
                                height={ 70 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Angular.js">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ angular }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Express.js">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ express }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="FastAPI">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ fastapi }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Flutter">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ flutter }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>

                    <Tooltip title="C# Dotnet">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ dotnet }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="MongoDB">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ mongo }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Git">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ git }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="AWS">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ aws }
                                width={ 100 }
                                height={ 80 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Digital Ocean">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ ocean }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Adobe Photoshop">
                        <Grid item xs={ 4 } md={ 3 } lg={ 2 }>
                            <Image
                                src={ ps }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Grid>
                    </Tooltip>








                </Grid>

                <Divider sx={ { mb: 2, mt: 2 } } />


                <Typography
                    sx={ {
                        fontSize: 40,
                        fontWeight: 900,
                        color: theme.palette.primary.char,
                        mb: 2,
                        mt: 3,
                    } }
                >
                    Soft Skills
                </Typography>



                <Grid container spacing={ 5 } sx={ { mb: 2 } }>
                    <Grid
                        item
                        xs={ 6 } md={ 6 } lg={ 4 }
                        sx={ {
                            display: "flex",

                        } }>
                        <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            } }
                        > Leadership </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={ 6 } md={ 6 } lg={ 4 }
                        sx={ {
                            display: "flex",

                        } }>
                        <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            } }
                        > Teamwork </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={ 6 } md={ 6 } lg={ 4 }
                        sx={ {
                            display: "flex",

                        } }>
                        <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            } }
                        > Fast-learner </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={ 6 } md={ 6 } lg={ 4 }
                        sx={ {
                            display: "flex",

                        } }>
                        <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            } }
                        > Dedicated </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={ 6 } md={ 6 } lg={ 4 }
                        sx={ {
                            display: "flex",

                        } }>
                        <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            } }
                        > Initiative </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={ 6 } md={ 6 } lg={ 4 }
                        sx={ {
                            display: "flex",

                        } }>
                        <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            } }
                        > Adaptability </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={ 6 } md={ 6 } lg={ 4 }
                        sx={ {
                            display: "flex",

                        } }>
                        <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            } }
                        > Problem-solving </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={ 6 } md={ 6 } lg={ 4 }
                        sx={ {
                            display: "flex",

                        } }>
                        <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            } }
                        > Respect </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={ 6 } md={ 6 } lg={ 4 }
                        sx={ {
                            display: "flex",

                        } }>
                        <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>
                        <Typography
                            sx={ {
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            } }
                        > Agile Workflow </Typography>

                    </Grid>



                </Grid>


                <Divider sx={ { mb: 2, mt: 2 } } />


                <Typography
                    sx={ {
                        fontSize: 40,
                        fontWeight: 900,
                        color: theme.palette.primary.char,
                        mb: 1
                    } }
                >
                    Achievements
                </Typography>

                <Box
                    sx={ {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        mb: 2
                    } }
                >
                    <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>

                    <Typography
                        sx={ {
                            fontSize: 20,
                            fontWeight: 400,
                            color: theme.palette.primary.main,

                        } }
                    >
                        Dean's List

                    </Typography>
                    <Typography
                        sx={ {
                            fontSize: 15,
                            fontWeight: 400,
                            color: theme.palette.primary.char,
                            width: "100%"
                        } }
                    >
                        Achieved the required grade status to earn a spot on the University of Pittsburgh’s School of Computing and Information's Dean's List in all six of my semesters                    </Typography>

                </Box>

                <Box
                    sx={ {
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center"
                    } }
                >
                    <Icon className='material-symbols-outlined' sx={ { mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" } }  >radio_button_unchecked</Icon>

                    <Typography
                        sx={ {
                            fontSize: 20,
                            fontWeight: 400,
                            color: theme.palette.primary.main,

                        } }
                    >
                        Class of 2021 Valedictorian

                    </Typography>
                    <Typography
                        sx={ {
                            fontSize: 15,
                            fontWeight: 400,
                            color: theme.palette.primary.char,
                            width: "100%"
                        } }
                    >
                        Achieved the highest GPA of my graduating high school class
                    </Typography>

                </Box>


                <Divider sx={ { mb: 2, mt: 2 } } />


            </Box >



        </>

    );
}