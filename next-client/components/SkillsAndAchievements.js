
import { Box, Grid, Divider, Tooltip, Typography, Icon } from '@mui/material';
import { useTheme } from '@emotion/react';
import Image from 'next/image'

export default function SkillsAndAchievements() {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    mt: 2
                }}
            >




                <Typography
                    sx={{
                        fontSize: 40,
                        fontWeight: 900,
                        color: theme.palette.primary.char,
                        mb: 2
                    }}
                >
                    Technical Skills
                </Typography>
                {/* 
                <Grid container spacing={5} sx={{ mb: 2 }}>

                    <Tooltip title="C">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/c-logo.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>

                    <Tooltip title="Java">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/java.svg"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>

                    <Tooltip title="Python">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/python.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>

                    <Tooltip title="C#">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/csharp.svg"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Javascript">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/js.svg"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Go">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/go.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Dart">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/dart.png"
                                width={100}
                                height={60}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="HTML">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/html.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="CSS">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/css.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="React.js">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/reactjs.png"
                                width={100}
                                height={90}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Node.js">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/node.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Next.js">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/next.png"
                                width={100}
                                height={70}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Angular.js">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/angular.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Express.js">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/express.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="FastAPI">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/fastapi.svg"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Flutter">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/flutter.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>

                    <Tooltip title="C# Dotnet">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/dotnet.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="MongoDB">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/mongo.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Git">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/git.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="AWS">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/aws.png"
                                width={100}
                                height={80}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Digital Ocean">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/ocean.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>


                    <Tooltip title="Adobe Photoshop">
                        <Grid item xs={4} md={3} lg={2}>
                            <Image
                                src="/icons/ps.png"
                                width={100}
                                height={100}
                            />
                        </Grid>
                    </Tooltip>








                </Grid> */}

                <Divider sx={{ mb: 2, mt: 2 }} />


                <Typography
                    sx={{
                        fontSize: 40,
                        fontWeight: 900,
                        color: theme.palette.primary.char,
                        mb: 2,
                        mt: 3,
                    }}
                >
                    Soft Skills
                </Typography>



                <Grid container spacing={5} sx={{ mb: 2 }}>
                    <Grid
                        item
                        xs={6} md={6} lg={4}
                        sx={{
                            display: "flex",

                        }}>
                        <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            }}
                        > Leadership </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={6} md={6} lg={4}
                        sx={{
                            display: "flex",

                        }}>
                        <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            }}
                        > Teamwork </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={6} md={6} lg={4}
                        sx={{
                            display: "flex",

                        }}>
                        <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            }}
                        > Fast-learner </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={6} md={6} lg={4}
                        sx={{
                            display: "flex",

                        }}>
                        <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            }}
                        > Dedicated </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={6} md={6} lg={4}
                        sx={{
                            display: "flex",

                        }}>
                        <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            }}
                        > Initiative </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={6} md={6} lg={4}
                        sx={{
                            display: "flex",

                        }}>
                        <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            }}
                        > Adaptability </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={6} md={6} lg={4}
                        sx={{
                            display: "flex",

                        }}>
                        <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            }}
                        > Problem-solving </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={6} md={6} lg={4}
                        sx={{
                            display: "flex",

                        }}>
                        <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            }}
                        > Respect </Typography>

                    </Grid>
                    <Grid
                        item
                        xs={6} md={6} lg={4}
                        sx={{
                            display: "flex",

                        }}>
                        <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontWeight: 400,
                                color: theme.palette.primary.main,

                            }}
                        > Agile Workflow </Typography>

                    </Grid>



                </Grid>


                <Divider sx={{ mb: 2, mt: 2 }} />


                <Typography
                    sx={{
                        fontSize: 40,
                        fontWeight: 900,
                        color: theme.palette.primary.char,
                        mb: 1
                    }}
                >
                    Achievements
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        mb: 2
                    }}
                >
                    <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>

                    <Typography
                        sx={{
                            fontSize: 20,
                            fontWeight: 400,
                            color: theme.palette.primary.main,

                        }}
                    >
                        Dean's List

                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 15,
                            fontWeight: 400,
                            color: theme.palette.primary.char,
                            width: "100%"
                        }}
                    >
                        Achieved the required grade status to earn a spot on the University of Pittsburgh’s School of Computing and Information's Dean's List in all six of my semesters                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center"
                    }}
                >
                    <Icon className='material-symbols-outlined' sx={{ mr: 1, fontSize: 20, color: theme.palette.primary.main, fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;" }}  >radio_button_unchecked</Icon>

                    <Typography
                        sx={{
                            fontSize: 20,
                            fontWeight: 400,
                            color: theme.palette.primary.main,

                        }}
                    >
                        Class of 2021 Valedictorian

                    </Typography>
                    <Typography
                        sx={{
                            fontSize: 15,
                            fontWeight: 400,
                            color: theme.palette.primary.char,
                            width: "100%"
                        }}
                    >
                        Achieved the highest GPA of my graduating high school class
                    </Typography>

                </Box>


                <Divider sx={{ mb: 2, mt: 2 }} />


            </Box >



        </>

    );
}