'use client'
import { Box, Button } from "@mui/material"
import getData from '../../hooks/getData'
import {useState, useEffect} from 'react'
import styles from './ButtonsPortfolio.module.css'
import { PORTFOLIO } from "../../../utils/consts"


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
          
        } catch (error) {
            return {error:error.message}
        }
     }   
     fetchData()
  }, []) 

 
  return(
        <Box>
            <a className={styles.portfolio} href={englishshPortfolio} target="_blank" download>Portfolio EN</a> 
            <a className={styles.portfolio} href={spanishPortfolio} target="_blank" download>Portfolio ES</a>
        </Box>
    )
}

export default ButtonsPortfolio