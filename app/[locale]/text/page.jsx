'use client'
import { useState, useEffect } from 'react';
import getData from '../hooks/getData'
import CardText from "../components/CardText/CardText";
import {TEXT} from '../../utils/consts'
import { textOrdered } from '../../utils/functions';
import LoadingBar from 'react-top-loading-bar'
import { Box } from '@mui/material';
import Footer from '../components/Footer/Footer';
import styles from '../components/CardWorks/CardWorks.module.css'

const Works = () => {
  const [progress, setProgress] = useState(0)
    const [papers, setPapers] = useState([]);
  
    useEffect(() => {
    setProgress(100)
      const fetchData = async () => {
        const papersData = await getData(`${TEXT}/active`);
        const orderedPapers= textOrdered(papersData)
        const httpsFormat= orderedPapers.map((item)=> item.image.replace('http', 'https'))
        setPapers(orderedPapers);
      };      
      fetchData();  
    }, []);

    return (< > 
       <LoadingBar  color='black'progress={progress}  />
        <CardText texts={papers} />
        <Box className={styles.footerContainer}  sx={{width:'10%', display:'flex',justifyContent:'space-around', alignItems:'center', position:'fixed', bottom:'4%', left:'0.1%'}}>
    <div style={{marginLeft:'10px'}}>
     <Footer   />

    </div>
   </Box>   
        </>
        )
}
export default Works
