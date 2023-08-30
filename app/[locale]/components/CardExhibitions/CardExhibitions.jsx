'use client';
import styles from '../CardWorks/CardWorks.module.css'
import styleExhibition from './CardExhibition.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link'; 
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
import LoaderAnimation  from '../LoaderAnimation/LoaderAnimation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {comfortaa} from '../../fonts/fonts'
import {Item} from './itemStyle'

const imagesMaped=(exhibitions)=>{
 return exhibitions?.map((each)=> each.image)
}

const CardExhibitions=({ exhibitions})=>{
  const[orderedExhibition, setOrderedExhibition]=useState()
  const[loading, setLoading]= useState(false)
  const[images, setImages]= useState([])
  
  useEffect(()=>{
     const orderedExhibitions= exhibitions.sort((a,b)=>a.number - b.number)
    console.log(orderedExhibitions)
    const AllImages= imagesMaped(orderedExhibitions) 
    setOrderedExhibition(orderedExhibitions)
    console.log(orderedExhibition)
    setImages(AllImages)
    setLoading(true)     
  if(images){
    setTimeout(()=>{
      setLoading(false);
   },50)
  }
 },[])
  
 return (
      <main >
        <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={{ xs: 2, md: 3, lg:2, xl:2 }} columns={{ xs: 1, sm: 1, md: 1, lg:3, xl:3 }} direction="row" justifyContent="center" alignItems="center" >
          {loading && <LoaderAnimation/>}
           
            {exhibitions && exhibitions.map((exhibition, index) => (
              <Grid item xs={2} sm={4} md={3} lg={2} xl={3} key={index} >
                <div  direction="column" className={comfortaa.className}>
                  <Link  href={`/exhibitions/${(exhibition?.id)}`}>
                  { exhibition.images.map((each, index)=> index< 1 &&
                    <div style={{display:'flex',justifyContent:'center'}}>
                      <img style={{width:'80%'}} alt='imagen exhibicion' className={styleExhibition.cardImageExhibition} key={index} src={each} /> 
                        </div>
                  )}
              </Link>
              {images &&
              <div >
            {exhibitions &&    <Box>
                <h2 className={styles.cardItem} >{exhibition.exhibitionName}</h2>
                <p  className={styles.cardItem}>{exhibition.place}</p>
                <p  className={styles.cardItem}>{exhibition.date}</p>
                <p  className={styles.cardItem}>{exhibition.format}</p>
                </Box>
                }
              </div>
                  }

                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
      );
 }

export default CardExhibitions


