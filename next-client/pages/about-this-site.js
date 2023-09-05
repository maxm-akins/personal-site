import Head from 'next/head';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

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
                    p: expand ? "15%" : "29%",
                    pt: 11,
                    pb: 5,


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
                        mb: 3
                    } }
                >
                    How this (awesome) website was built

                </Typography>
                {/* <Typography
                    align='left'
                    sx={ {
                        // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                        // backgroundClip: "text",
                        width: "100%",
                        color: theme.palette.primary.char,
                        fontFamily: "Inter",
                        fontWeight: 200,
                        fontSize: 20,
                        mb: 6
                    } }
                >
                    July 17, 2023 - Maxm Akins

                </Typography>
 */}


                <Grid container spacing={ 4 }>


                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >


                        Before you say anything, this entire app could've been delivered via a static site on GitHub Pages, and it would've taken me one-fourth of the time. I know that...
                        However, I wanted to fully demonstrate what I could build despite this being a selfish, self-promoting, and rarely changing website. So, rather than make it very simple and to the point, here are the various pieces that hold this website together.


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
                            Framework:

                        </Typography>
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

                        Next.js was used as the primary framework for the development of this site. As Next continues to flex its power and potential in the web development world, it was my wish to demonstrate my ability to use and benefit from the framework effectively. Across the site, you will encounter (although you may not notice) different inclusions of Next.js features. These range from pre-rendering like static generation (this page you happen to be on), server-side rendering, and client-side rendering. However, I am still far from fully comprehending the broad scope of Next.js resources, and I will continue to learn and update this site as I go.

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

                        I utilized the Material UI library of React components to construct the visually appealing front-end you are viewing now. Framer Animation was also used to include attractive animations. While implementing these libraries, I kept responsiveness in mind, and you should find a comfortable viewing experience no matter the size of your screen (feel free to test it out).
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

                        Although Next.js provides its own API service, I am still partial to using a private and separate backend for my apps. I used Node.js alongside Express.js and MongoDB as the primary and notable additions to accomplish this.

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
                            Hosting:

                        </Typography>
                    </Grid>

                    <Grid item xs={ 12 } md={ 6 }>
                        <img src="/images/nginxLogo.png"
                        />

                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }>
                        <img src="/images/pm2Logo.png"
                        />

                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }>
                        <img src="/images/certBotLogo.png"
                        />

                    </Grid>
                    <Grid item xs={ 12 } md={ 6 }>
                        <img src="/images/ec2Logo.png"
                        />

                    </Grid>
                    <Grid item xs={ 12 }
                        sx={ {
                            display: "flex",

                            position: "relative",
                        } }
                    >

                        I have used the following technologies to host this site for all to see. Most importantly, I host my servers using an AWS EC2 Ubuntu instance. NGINX is my reverse proxy and web server, which can be configured to play well with Next.js. I used PM2 to process-manage my servers and keep them running during crashes or unexpected shutdowns. Finally, Certbot was used to earn an SSH Certificate and make my site accessible only via HTTPS.
                    </Grid>


                </Grid>

            </Box >




















        </>

    );
}