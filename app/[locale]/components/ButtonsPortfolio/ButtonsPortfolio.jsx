'use client'
import { Box } from "@mui/material"
import getData from '../../hooks/getData'
import {useState, useEffect} from 'react'
import styles from './ButtonsPortfolio.module.css'
import { PORTFOLIO } from "../../../utils/consts"
import { comfortaa } from "../../fonts/fonts"

const ButtonsPortfolio=()=>{
    const[spanishPortfolio, setSpanishPortfolio]=useState()
    const[englishshPortfolio, setEnglishshPortfolio]=useState()


  useEffect(() => {
     const fetchData=async()=>{
        try {
          const response= await getData(PORTFOLIO)
          if(!response) throw new Error('no se encontraron portfolios')
          const spanishPortfolios = response.filter(portfolio => portfolio.language === 'Español');
          const englishPortfolios = response.filter(portfolio => portfolio.language === 'Ingles');
            
          setSpanishPortfolio(spanishPortfolios[0].image);
          setEnglishshPortfolio(englishPortfolios[0].image);
          console.log(spanishPortfolios[0].image)
        } catch (error) {
            return {error:error.message}
        }
     }   
     fetchData()
  }, []) 

 
  return(
        <Box sx={{display:'flex'}} >
            <a class={comfortaa.className} className={styles.containerPortfolioEs} href={englishshPortfolio} download target="_blank" ><i>PORTFOLIO EN</i></a> 
            <a class={comfortaa.className} className={styles.containerPortfolioEn} href={spanishPortfolio} download target="_blank" ><i>PORTFOLIO ES</i></a>
        </Box>
   
    )
}

export default ButtonsPortfolio