import Head from 'next/head';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';


export default function Home({ allPostsData }) {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title> Maxm Akins - Personal Website</title>
      </Head>


      <AnimatePresence >
        <Box
          sx={ {
            // background: `linear-gradient(110deg, ${theme.palette.primary.main}  40%, ${theme.palette.primary.secondary} 40%)`,
            // width: "100vw",
            height: "100vh",
            // pb: 10,
            // mt: "12%",
            // mb: "15%",
          } }

        >
          <Box
            component={ motion.div }
            initial={ { x: "-100%" } }
            animate={ { x: 0 } }
            transition={ { duration: 1.5, type: "spring" } }
            sx={ {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",

            } }
          >
            <Typography
              variant='h1'
              sx={ {
                transition: "all 1s",
                fontSize: "18em",
                fontWeight: 500,
                width: "100%",
                color: theme.palette.primary.white,
                [theme.breakpoints.down('md')]: {
                  fontSize: "10em",
                },
                [theme.breakpoints.down('sm')]: {
                  fontSize: "7em",
                },
              } }
              align="center"
            >
              Hello,
            </Typography>
            <Typography
              variant='h4'
              sx={ {
                transition: "all 1s",
                fontSize: "4em",
                fontWeight: 700,
                width: "100%",
                color: theme.palette.primary.white,
                [theme.breakpoints.down('md')]: {
                  fontSize: "2em",
                },


              } }
              align="center"

            >
              My name is <Link
                style={ {
                  textDecoration: "none",
                  display: "inline-block"
                } }
                href="/about-me" >  <Box sx={ {
                  transition: "all .5s",
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  "&:hover": {
                    color: theme.palette.primary.char
                  },
                } }> Maxm Akins </Box>
              </Link>
            </Typography>

          </Box>
        </Box>
      </AnimatePresence>

    </>

  );
}