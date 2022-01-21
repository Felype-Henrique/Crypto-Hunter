import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(()=>({
    banner:{
        backgroundImage: "url(./banner2.jpg)"
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        padding: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
}));

const Banner = () => {
    const classes = useStyles();

    return(
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                     variant= "h2"
                     style={{
                         fontWeight: "bold",
                         marginBottom: 15,
                         fontFamily: "Montserrat"
                     }}
                    >
                        Cripto Hunter
                    </Typography>
                    <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Obtenha todas as informações sobre a sua Criptomoeda favorita
          </Typography>
                </div>
            </Container>
        </div>
    )
}

export default Banner