'use client';
import styles from '../CardWorks/CardWorks.module.css'
import styleExhibition from './CardExhibition.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from 'next/link'; 
import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';
import Loader  from '../Loader/Loader';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {Item} from './itemStyle'

const imagesMaped=(exhibitions)=>{
 return exhibitions?.map((each)=> each.image)
}

const CardExhibitions=({ exhibitions})=>{
  const[loading, setLoading]= useState(false)
  const[images, setImages]= useState([])
  
  useEffect(()=>{
    const AllImages= imagesMaped(exhibitions) 
    setImages(AllImages)
    setLoading(true)     
  if(images){
    setTimeout(()=>{
      setLoading(false);
   },50)
  }
 },[])
  
 return (
      <main>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3, lg:2, xl:2 }} columns={{ xs: 1, sm: 1, md: 1, lg:3, xl:3 }} direction="row" justifyContent="center" alignItems="center" >
          {loading && <Loader/>}
           
            {exhibitions && exhibitions.map((exhibition, index) => (
              <Grid item xs={2} sm={4} md={3} lg={2} xl={3} key={index} >
                <Item  direction="column" >
                  <Link  href={`/exhibitions/${(exhibition?.id)}`}>
                  { exhibition.images.map((each, index)=> index< 1 &&
                 <img style={{width:'80%'}} priority className={styleExhibition.cardImageExhibition} key={index} src={each} /> 
                  )}
              </Link>
              {images &&
              <div>
                <h2 className={styles.cardItem} >{exhibition.exhibitionName}</h2>
                <p  className={styles.cardItem}>{exhibition.place}</p>
                <p  className={styles.cardItem}>{exhibition.date}</p>
                <p  className={styles.cardItem}>{exhibition.format}</p>
              </div>
                  }
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </main>
      );
 }

export default CardExhibitions


