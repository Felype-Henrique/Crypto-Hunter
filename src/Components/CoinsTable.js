import React from 'react'
import { useState } from "react"
import axios from "axios"
import {CoinList} from "../config/api"
import {CryptoState} from "../CryptoContext"
import { useEffect } from 'react'
import { Container, createTheme, ThemeProvider } from '@material-ui/core'

const CoinsTable = () => {
    const [coins , setCoins] = useState([]);
    const [loading , setLoading] = useState(false);

    const {currency} = CryptoState()

    const FetchCoins = async() => {
        setLoading(true);

        const {data} = await axios.get(CoinList(currency))
        setCoins(data);
        setLoading(false);

    }
        console.log(coins);

        useEffect(() => {
            FetchCoins()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [currency])
    
        const darkTheme = createTheme({
            palette: {
              primary: {
                main: "#fff",
              },
              type: "dark",
            },
          });
    return (
        <div>
           <ThemeProvider theme={darkTheme}>
             <Container style={{ textAlign: "center"}}>

             </Container>
           </ThemeProvider>
        </div>
    )
}

export default CoinsTable